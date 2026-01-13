




import React, { useState } from 'react';

function Footer() {
  // حالة لتخزين المؤلف المحدد لعرض ملفه الشخصي
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  // بيانات الكُتَّاب مع صور مناسبة من Unsplash
  const authors = [
    {
      id: 1,
      name: "William Shakespeare",
      image: "src/images/1.jpg",
      description: "English playwright and poet, widely regarded as the greatest writer in the English language.",
      works: ["Hamlet", "Romeo & Juliet", "Macbeth"],
      nationality: "British",
      fullBio: "William Shakespeare (1564-1616) was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist. His plays have been translated into every major living language and are performed more often than those of any other playwright.",
      notableBooks: 39,
      century: "16th-17th Century",
      born: "April 1564, Stratford-upon-Avon, England",
      died: "23 April 1616, Stratford-upon-Avon, England"
    },
    {
      id: 2,
      name: "Jane Austen",
      image: "src/images/2.jpg",
      description: "English novelist known for her six major novels which interpret the British landed gentry.",
      works: ["Pride & Prejudice", "Emma"],
      nationality: "British",
      fullBio: "Jane Austen (1775-1817) was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Her use of biting irony, along with her realism and social commentary, have earned her acclaim among critics and scholars.",
      notableBooks: 6,
      century: "18th-19th Century",
      born: "16 December 1775, Steventon, England",
      died: "18 July 1817, Winchester, England"
    },
    {
      id: 3,
      name: "Charles Dickens",
      image: "src/images/4.jpg",
      description: "English writer and social critic, regarded as the greatest novelist of the Victorian era.",
      works: ["Oliver Twist", "Great Expectations"],
      nationality: "British",
      fullBio: "Charles Dickens (1812-1870) was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era. His works enjoyed unprecedented popularity during his lifetime and, by the 20th century, critics and scholars had recognised him as a literary genius.",
      notableBooks: 15,
      century: "19th Century",
      born: "7 February 1812, Portsmouth, England",
      died: "9 June 1870, Higham, Kent, England"
    },
    {
      id: 4,
      name: "George Orwell",
      image: "src/images/5.jpg",
      description: "English novelist, essayist, journalist and critic, known for his dystopian novels.",
      works: ["1984", "Animal Farm"],
      nationality: "British",
      fullBio: "George Orwell (1903-1950) was an English novelist, essayist, journalist and critic. His work is characterised by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism. Orwell's most famous works are the satirical novella Animal Farm (1945) and the dystopian novel Nineteen Eighty-Four (1949).",
      notableBooks: 10,
      century: "20th Century",
      born: "25 June 1903, Motihari, India",
      died: "21 January 1950, London, England"
    },
    {
      id: 5,
      name: "Agatha Christie",
      image: "src/images/3.jpg",
      description: "English writer known for her detective novels and short story collections.",
      works: ["Murder on the Orient Express"],
      nationality: "British",
      fullBio: "Agatha Christie (1890-1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the world's longest-running play, The Mousetrap. Guinness World Records lists Christie as the best-selling fiction writer of all time.",
      notableBooks: 85,
      century: "20th Century",
      born: "15 September 1890, Torquay, England",
      died: "12 January 1976, Winterbrook, England"
    },
    {
      id: 6,
      name: "Fyodor Dostoevsky",
      image: "src/images/3.jpg",
      description: "Russian novelist, short story writer, essayist, and journalist.",
      works: ["Crime and Punishment"],
      nationality: "Russian",
      fullBio: "Fyodor Dostoevsky (1821-1881) was a Russian novelist, short story writer, essayist, and journalist. His literary works explore human psychology in the troubled political, social, and spiritual atmosphere of 19th-century Russia. Many literary critics rate him as one of the greatest novelists in all of world literature.",
      notableBooks: 12,
      century: "19th Century",
      born: "11 November 1821, Moscow, Russia",
      died: "9 February 1881, Saint Petersburg, Russia"
    }
  ];

  // دالة لعرض ملف المؤلف الشخصي
  const handleViewProfile = (author) => {
    setSelectedAuthor(author);
    setShowProfile(true);
  };

  // دالة لإغلاق ملف المؤلف الشخصي
  const handleCloseProfile = () => {
    setShowProfile(false);
    setSelectedAuthor(null);
  };

  return (
    <div className="container my-5">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-dark mb-3">
          <i className="bi bi-pen-fill text-warning me-2"></i>
          Famous Authors
        </h2>
        <p className="lead text-muted">
          Discover the world's most influential literary minds
        </p>
        <div className="d-flex justify-content-center mt-4">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-warning fw-semibold">All</button>
            <button type="button" className="btn btn-outline-warning">British</button>
            <button type="button" className="btn btn-outline-warning">American</button>
            <button type="button" className="btn btn-outline-warning">Russian</button>
          </div>
        </div>
      </div>

      {/* شبكة الكُتَّاب */}
      <div className="row g-4">
        {authors.map((author) => (
          <div key={author.id} className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 border-0 shadow-lg hover-effect">
              <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                <img 
                  src={author.image} 
                  alt={author.name}
                  className="card-img-top w-100 h-100 object-fit-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${author.name}&background=random&size=250`;
                  }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-warning text-dark">
                    <i className="bi bi-globe me-1"></i>{author.nationality}
                  </span>
                </div>
              </div>
              
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title fw-bold text-dark mb-0">{author.name}</h5>
                  <button className="btn btn-sm btn-outline-warning">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
                
                <p className="card-text text-muted mb-4">{author.description}</p>
                
                <div className="mb-4">
                  <h6 className="text-warning fw-semibold mb-2">
                    <i className="bi bi-book me-2"></i>Notable Works
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {author.works.map((work, index) => (
                      <span key={index} className="badge bg-warning bg-opacity-10 text-dark border border-warning">
                        {work}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <button 
                    className="btn btn-warning fw-semibold px-4"
                    onClick={() => handleViewProfile(author)}
                  >
                    <i className="bi bi-eye me-2"></i>View Profile
                  </button>
                  <a href="#" className="text-warning text-decoration-none fw-semibold">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              
              <div className="card-footer bg-transparent border-top-0 pt-0">
                <div className="d-flex justify-content-between text-muted small">
                  <span>
                    <i className="bi bi-star-fill text-warning me-1"></i>4.8
                  </span>
                  <span>
                    <i className="bi bi-book me-1"></i>{author.notableBooks}+ Books
                  </span>
                  <span>
                    <i className="bi bi-calendar me-1"></i>{author.century}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* نافذة ملف المؤلف الشخصي (Modal) */}
      {showProfile && selectedAuthor && (
        <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{selectedAuthor.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseProfile}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="text-center mb-4">
                      <img 
                        src={selectedAuthor.image} 
                        alt={selectedAuthor.name}
                        className="img-fluid rounded-circle border border-warning"
                        style={{width: '200px', height: '200px', objectFit: 'cover'}}
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${selectedAuthor.name}&background=random&size=200`;
                        }}
                      />
                      <div className="mt-3">
                        <span className="badge bg-warning text-dark fs-6">
                          <i className="bi bi-globe me-1"></i>{selectedAuthor.nationality}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h6 className="text-warning fw-semibold">
                        <i className="bi bi-info-circle me-2"></i>Biography
                      </h6>
                      <p>{selectedAuthor.fullBio}</p>
                    </div>
                    
                    <div className="row mb-4">
                      <div className="col-6">
                        <h6 className="text-warning fw-semibold">
                          <i className="bi bi-calendar-event me-2"></i>Born
                        </h6>
                        <p>{selectedAuthor.born}</p>
                      </div>
                      <div className="col-6">
                        <h6 className="text-warning fw-semibold">
                          <i className="bi bi-calendar-x me-2"></i>Died
                        </h6>
                        <p>{selectedAuthor.died}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h6 className="text-warning fw-semibold">
                        <i className="bi bi-book me-2"></i>Notable Works
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedAuthor.works.map((work, index) => (
                          <span key={index} className="badge bg-warning bg-opacity-25 text-dark border border-warning p-2">
                            {work}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="d-flex gap-3">
                      <div className="text-center p-3 border rounded bg-light">
                        <div className="text-warning fw-bold fs-4">{selectedAuthor.notableBooks}+</div>
                        <div className="text-muted">Books</div>
                      </div>
                      <div className="text-center p-3 border rounded bg-light">
                        <div className="text-warning fw-bold fs-4">{selectedAuthor.century}</div>
                        <div className="text-muted">Century</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary" 
                  onClick={handleCloseProfile}
                >
                  Close
                </button>
                <button type="button" className="btn btn-warning">
                  <i className="bi bi-book me-2"></i>View All Books
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* قسم النداء للعمل */}
      <div className="text-center mt-5 pt-5">
        <div className="bg-warning bg-opacity-10 p-5 rounded-4">
          <h3 className="fw-bold mb-3">Explore More Authors</h3>
          <p className="text-muted mb-4">Join our community of literature lovers and discover hundreds of authors</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-warning btn-lg fw-semibold px-5">
              <i className="bi bi-search me-2"></i>Search Authors
            </button>
            <button className="btn btn-outline-warning btn-lg fw-semibold px-5">
              <i className="bi bi-download me-2"></i>Download Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;