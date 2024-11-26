import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Variabel untuk judul dan deskripsi
var title = 'A blog post';
var desc = 'A description';

// Komponen kelas BlogPost
class BlogPost extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

// Komponen Fungsi App
function App() {
  return (
    <div>
      <BlogPost title={title} description={desc} />
    </div>
  )
}

// Definisi PropTypes untuk BlogPost
BlogPost.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

// Definisi defaultProps untuk BlogPost
BlogPost.defaultProps = {
  title: '', // Nilai default untuk title
  description: '', // Nilai default untuk description
}

export default App;