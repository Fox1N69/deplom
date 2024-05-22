package main

import (
	"kws/pkg/database"
	"kws/pkg/models"
	"net/http"

	"github.com/PuerkitoBio/goquery"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func fetchNews(c echo.Context) error {
	doc, err := goquery.NewDocument("https://kcpt72.ru/category/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C/")
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	var news []models.NewsData

	doc.Find(".new").Each(func(i int, s *goquery.Selection) {
		title := s.Find(".card-title").Text()
		content := s.Find(".entry").Text()
		link, _ := s.Find("a.more-link").Attr("href")

		newsItem := models.NewsData{
			Title:   title,
			Content: content,
			Link:    link,
		}
		news = append(news, newsItem)


		db := database.GetDB()
		// Сохраняем каждую новость в базу данных
		result := db.Create(&newsItem) // Предполагается, что у вас есть глобальный объект DB
		if result.Error != nil {
			c.Logger().Errorf("Failed to save news item: %v", result.Error)
		}
	})

	return c.JSON(http.StatusOK, news)
}

func fetchNewsByID(c echo.Context) error {
    // Получаем ID новости из параметров запроса
    newsID := c.QueryParam("id")

    db := database.GetDB()
    var newsItem models.NewsData

    // Ищем новость по ID в базе данных
    result := db.First(&newsItem, newsID)
    if result.Error != nil {
        return echo.NewHTTPError(http.StatusInternalServerError, result.Error.Error())
    }

    // Проверяем, что у новости есть URL
    if newsItem.Link == "" {
        return echo.NewHTTPError(http.StatusBadRequest, "No URL found for the news item")
    }

    // Парсим новость по полученному URL
    doc, err := goquery.NewDocument(newsItem.Link)
    if err != nil {
        return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
    }

    fullNews := models.NewsData{
        Title:   doc.Find(".full-news-title").Text(),
        Content: doc.Find(".full-news-content").Text(),
    }

    return c.JSON(http.StatusOK, fullNews)
}

func GetAllNews(c echo.Context) error {
	var news []models.NewsData

	if err := c.Bind(&news); err != nil {
		return c.JSON(http.StatusBadRequest, "Error json data")
	}

	return c.JSON(http.StatusOK, news)
}

func main() {
	database.GetDB()
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/news", fetchNews)
	e.GET("/news/full", fetchNewsByID) // Измененный маршрут

	e.Logger.Fatal(e.Start(":8080"))
}
