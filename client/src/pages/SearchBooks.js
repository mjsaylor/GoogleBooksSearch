import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  saveBook = (book) => {
    const savedBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
      link: book.volumeInfo.previewLink,
    }
    API.saveBook(savedBook)
      .then(data => {
        if (data.error) {
          console.error(data.error)
        }
      })
      .catch(err => console.log(err));
  };

  searchBooks = (title) => {
    API.searchBooks(title)
      .then(data => {
        if (data.error) {
          console.error(data.error)
        } else {
          const books = data.items
          this.setState({ books: books, title: "" })
        }

      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      this.searchBooks(this.state.title)
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Search for Books</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <strong>
                      {book.volumeInfo.title} by {book.volumeInfo.authors}
                    </strong>
                    <br />
                    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"} />
                    <p>{book.volumeInfo.description}</p>
                    <SaveBtn onClick={() => this.saveBook(book)} />
                    <ViewBtn href={book.volumeInfo.previewLink} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
