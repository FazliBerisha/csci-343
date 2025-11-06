/**
 * News Model Class
 * Represents a news article with all its properties
 * Uses object-oriented programming to encapsulate news data
 * This model ensures consistent data structure across the application
 */
class News {
  /**
   * Constructor to create a new News object
   * @param {string} id - Unique identifier for the news article
   * @param {string} category - News category (US, World, Tech)
   * @param {string} headline - Main headline/title of the article
   * @param {string} date - Publication date
   * @param {string} author - Name of the article author
   * @param {string} agency - News agency/source (CNN, BBC, etc.)
   * @param {string} description - Full article text/description
   * @param {string} imageUrl - URL to the article's featured image
   */
  constructor(
    id,
    category,
    headline,
    date,
    author,
    agency,
    description,
    imageUrl
  ) {
    this.id = id;
    this.category = category;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  /**
   * toString method for debugging and logging
   * Returns a formatted string representation of the news article
   */
  toString() {
    return `${this.headline} - ${this.agency} - ${this.author} - ${this.date}`;
  }
}

export default News;
  