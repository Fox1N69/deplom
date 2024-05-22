package models

type NewsData struct {
	ID      uint   `json:"id" gorm:"primaryKey;autoIncrement:true"`
	Title   string `json:"title"`
	Content string `json:"content"`
	Link    string `json:"link"`
}
