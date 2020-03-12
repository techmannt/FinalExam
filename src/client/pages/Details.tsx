import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

const Details: React.FC<DetailsProps> = (props) => {
  const [book, setBook] = useState<IBook>({
    id: '0',
    title: '',
    price: 0,
    author: '',
    created: new Date(),
    name: '',
    categoryid: 0
  });

  useEffect(() => {
    async function loadBook() {
      let res = await fetch(`/api/books/${props.match.params.id}`);
      let bookInfo = await res.json();
      setBook(bookInfo);
    }

    loadBook();

  }, []);

  return (
    <div>
      <p>{book.title}</p>
      <p>${book.price}</p>
      <p>{book.author}</p>
      <p>{book.name}</p>
      <p><Link to={`/`}>Go Back</Link></p>
      <p><Link to={`/edit/${book.id}`}>Edit</Link></p>
    </div>
  );
}

interface IBook {
  id: string,
  title: string,
  price: number,
  author: string,
  created: Date,
  name: string,
  categoryid: number
}

interface DetailsProps extends RouteComponentProps<{ id: string }> { }

export default Details;
