// src/components/AuthorSection.jsx
// function AuthorSection() {
//   return (
//     <section className="author-section">
//       <h2>عن المؤلف</h2>
//       <p>هذا القسم يعرض معلومات عن كاتب المدونة أو الموقع.</p>
//       <p>يمكنك إضافة صورة، وصف، روابط اجتماعية، إلخ.</p>
//     </section>
//   );
// }

// export default AuthorSection;





// 


// import React, { useState } from 'react';

// const AuthorSection = () => {
//   const [authorsData, setAuthorsData] = useState([
//     {
//       id: 1,
//       name: "William Shakespeare",
//       image: "src/images/1.jpg",
//       nationality: "British",
//       description: "English playwright and poet, widely regarded as the greatest writer in the English language.",
//       famousWorks: ["Hamlet", "Romeo & Juliet", "Macbeth"],
//       birthYear: 1564,
//       deathYear: 1616,
//       isExpanded: false
//     },
//     {
//       id: 2,
//       name: "Jane Austen",
//       image: "/imagg/imag5.jpg", 
//       nationality: "British",
//       description: "English novelist known for her six major novels which interpret the British landed gentry.",
//       famousWorks: ["Pride & Prejudice", "Emma", "Sense and Sensibility"],
//       birthYear: 1775,
//       deathYear: 1817,
//       isExpanded: false
//     }
//   ]);

//   const toggleAuthor = (id) => {
//     setAuthorsData(prev => prev.map(author => 
//       author.id === id 
//         ? { ...author, isExpanded: !author.isExpanded }
//         : author
//     ));
//   };

//   const styles = {
//     wrapper: {
//       padding: '40px',
//       backgroundColor: '#f9f9f9',
//       minHeight: '100vh'
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '30px',
//       marginTop: '30px'
//     },
//     card: {
//       backgroundColor: '#fff',
//       borderRadius: '15px',
//       padding: '20px',
//       boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//       cursor: 'pointer',
//       transition: 'transform 0.3s ease'
//     },
//     image: {
//       width: '100%',
//       height: '200px',
//       objectFit: 'cover',
//       borderRadius: '10px',
//       marginBottom: '15px'
//     },
//     name: {
//       fontSize: '1.5rem',
//       color: '#333',
//       marginBottom: '10px'
//     },
//     nationality: {
//       display: 'inline-block',
//       backgroundColor: '#007bff',
//       color: 'white',
//       padding: '5px 15px',
//       borderRadius: '20px',
//       fontSize: '0.9rem',
//       marginBottom: '10px'
//     },
//     description: {
//       color: '#666',
//       fontSize: '0.95rem',
//       lineHeight: '1.5'
//     },
//     works: {
//       marginTop: '15px',
//       padding: '10px',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '8px',
//       fontSize: '0.9rem'
//     }
//   };

//   return (
//     <div style={styles.wrapper}>
//       <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
//         Meet the Authors
//       </h1>
      
//       <div style={styles.grid}>
//         {authorsData.map((author) => (
//           <div 
//             key={author.id} 
//             style={styles.card}
//             onClick={() => toggleAuthor(author.id)}
//           >
//             <img 
//               src={author.image} 
//               alt={author.name} 
//               style={styles.image}
//             />
//             <h2 style={styles.name}>{author.name}</h2>
//             <span style={styles.nationality}>
//               {author.nationality}
//             </span>
//             <p style={styles.description}>
//               {author.description}
//             </p>
            
//             {author.isExpanded && (
//               <div style={styles.works}>
//                 <strong>Famous Works:</strong>
//                 <ul style={{ margin: '10px 0 0 20px' }}>
//                   {author.famousWorks.map((work, index) => (
//                     <li key={index}>{work}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ⭐⭐ هذا السطر ضروري ⭐⭐
// export default AuthorSection;


// import React, { useState, useEffect } from 'react';

// const AuthorSection = () => {
//   const [authorsData, setAuthorsData] = useState([
//     {
//       id: 1,
//       name: "William Shakespeare",
//       image: "src/images/1.jpg",
//       nationality: "British",
//       description: "English playwright and poet, widely regarded as the greatest writer in the English language. His works have been translated into every major language.",
//       famousWorks: ["Hamlet", "Romeo & Juliet", "Macbeth", "Othello", "King Lear"],
//       birthYear: 1564,
//       deathYear: 1616,
//       isExpanded: false,
//       genre: ["Tragedy", "Comedy", "History", "Poetry"],
//       achievements: ["38 plays", "154 sonnets", "2 narrative poems"],
//       rating: 4.9
//     },
//     {
//       id: 2,
//       name: "Jane Austen",
//       image: "src/images/2.jpg", 
//       nationality: "British",
//       description: "English novelist known for her six major novels which interpret the British landed gentry at the end of the 18th century.",
//       famousWorks: ["Pride & Prejudice", "Emma", "Sense and Sensibility", "Mansfield Park", "Northanger Abbey"],
//       birthYear: 1775,
//       deathYear: 1817,
//       isExpanded: false,
//       genre: ["Romance", "Satire", "Novel of manners"],
//       achievements: ["6 completed novels", "Literary realism pioneer"],
//       rating: 4.7
//     }
//   ]);

//   const [selectedGenre, setSelectedGenre] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('name');
//   const [loading, setLoading] = useState(true);
//   const [hoverStates, setHoverStates] = useState({});
//   const [workHoverStates, setWorkHoverStates] = useState({});

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   const toggleAuthor = (id) => {
//     setAuthorsData(prev => prev.map(author => 
//       author.id === id 
//         ? { ...author, isExpanded: !author.isExpanded }
//         : { ...author, isExpanded: false }
//     ));
//   };

//   const handleCardHover = (id, isHovered) => {
//     setHoverStates(prev => ({ ...prev, [id]: isHovered }));
//   };

//   const handleWorkHover = (authorId, workIndex, isHovered) => {
//     setWorkHoverStates(prev => ({
//       ...prev,
//       [authorId]: { ...prev[authorId], [workIndex]: isHovered }
//     }));
//   };

//   const getAllGenres = () => {
//     const genres = new Set();
//     authorsData.forEach(author => {
//       author.genre.forEach(g => genres.add(g));
//     });
//     return ['all', ...Array.from(genres)];
//   };

//   const filteredAndSortedAuthors = authorsData
//     .filter(author => {
//       if (selectedGenre !== 'all' && !author.genre.includes(selectedGenre)) return false;
//       if (searchTerm && !author.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
//           !author.nationality.toLowerCase().includes(searchTerm.toLowerCase())) return false;
//       return true;
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'name': return a.name.localeCompare(b.name);
//         case 'year': return a.birthYear - b.birthYear;
//         case 'rating': return b.rating - a.rating;
//         default: return 0;
//       }
//     });

//   const calculateLifespan = (birth, death) => {
//     return death - birth;
//   };

//   const renderStarRating = (rating) => {
//     return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
//   };

//   const styles = {
//     wrapper: {
//       padding: '50px 20px',
//       backgroundColor: '#f8f9fa',
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       backgroundAttachment: 'fixed'
//     },
//     container: {
//       maxWidth: '1400px',
//       margin: '0 auto',
//       backgroundColor: 'rgba(255, 255, 255, 0.95)',
//       borderRadius: '20px',
//       padding: '40px',
//       boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '50px',
//       position: 'relative'
//     },
//     title: {
//       fontSize: '3.5rem',
//       background: 'linear-gradient(45deg, #667eea, #764ba2)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       marginBottom: '15px',
//       fontWeight: '800',
//       letterSpacing: '-0.5px'
//     },
//     subtitle: {
//       fontSize: '1.2rem',
//       color: '#6c757d',
//       maxWidth: '600px',
//       margin: '0 auto 30px',
//       lineHeight: '1.6'
//     },
//     controls: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       flexWrap: 'wrap',
//       gap: '20px',
//       marginBottom: '40px',
//       padding: '25px',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '15px',
//       boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
//     },
//     searchContainer: {
//       flex: '1',
//       minWidth: '300px',
//       position: 'relative'
//     },
//     searchInput: {
//       width: '100%',
//       padding: '15px 20px 15px 50px',
//       border: '2px solid #e0e0e0',
//       borderRadius: '50px',
//       fontSize: '1rem',
//       transition: 'all 0.3s ease',
//       outline: 'none',
//       backgroundColor: 'white'
//     },
//     searchIcon: {
//       position: 'absolute',
//       left: '20px',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       color: '#667eea',
//       fontSize: '1.2rem'
//     },
//     filterGroup: {
//       display: 'flex',
//       gap: '15px',
//       flexWrap: 'wrap'
//     },
//     select: {
//       padding: '12px 25px',
//       border: '2px solid #e0e0e0',
//       borderRadius: '50px',
//       backgroundColor: 'white',
//       fontSize: '0.95rem',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       outline: 'none'
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//       gap: '30px',
//       marginBottom: '50px'
//     },
//     card: {
//       backgroundColor: '#fff',
//       borderRadius: '20px',
//       overflow: 'hidden',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
//       cursor: 'pointer',
//       transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//       position: 'relative',
//       border: '1px solid #f0f0f0'
//     },
//     cardHover: {
//       transform: 'translateY(-10px)',
//       boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
//     },
//     imageContainer: {
//       position: 'relative',
//       height: '250px',
//       overflow: 'hidden'
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       transition: 'transform 0.5s ease'
//     },
//     imageHover: {
//       transform: 'scale(1.05)'
//     },
//     badge: {
//       position: 'absolute',
//       top: '20px',
//       right: '20px',
//       backgroundColor: 'rgba(102, 126, 234, 0.95)',
//       color: 'white',
//       padding: '8px 20px',
//       borderRadius: '50px',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       backdropFilter: 'blur(10px)'
//     },
//     ratingBadge: {
//       position: 'absolute',
//       bottom: '20px',
//       left: '20px',
//       backgroundColor: 'rgba(255, 193, 7, 0.95)',
//       color: '#333',
//       padding: '8px 15px',
//       borderRadius: '50px',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '5px'
//     },
//     content: {
//       padding: '25px'
//     },
//     name: {
//       fontSize: '1.8rem',
//       color: '#333',
//       marginBottom: '10px',
//       fontWeight: '700'
//     },
//     metaInfo: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '15px',
//       color: '#6c757d',
//       fontSize: '0.95rem'
//     },
//     lifespan: {
//       backgroundColor: '#e9ecef',
//       padding: '5px 15px',
//       borderRadius: '20px',
//       fontWeight: '600'
//     },
//     description: {
//       color: '#666',
//       fontSize: '0.95rem',
//       lineHeight: '1.7',
//       marginBottom: '20px',
//       display: '-webkit-box',
//       WebkitLineClamp: 3,
//       WebkitBoxOrient: 'vertical',
//       overflow: 'hidden'
//     },
//     expandedContent: {
//       marginTop: '20px',
//       paddingTop: '20px',
//       borderTop: '2px solid #f0f0f0',
//       animation: 'fadeIn 0.3s ease'
//     },
//     worksSection: {
//       marginBottom: '20px'
//     },
//     worksTitle: {
//       color: '#667eea',
//       fontSize: '1.1rem',
//       marginBottom: '10px',
//       fontWeight: '600'
//     },
//     worksList: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '10px',
//       listStyle: 'none',
//       padding: '0'
//     },
//     workItem: {
//       backgroundColor: '#f8f9fa',
//       padding: '8px 15px',
//       borderRadius: '20px',
//       fontSize: '0.9rem',
//       color: '#495057',
//       transition: 'all 0.3s ease'
//     },
//     workItemHover: {
//       backgroundColor: '#667eea',
//       color: 'white',
//       transform: 'translateY(-2px)'
//     },
//     achievements: {
//       backgroundColor: '#fff3cd',
//       padding: '15px',
//       borderRadius: '10px',
//       marginBottom: '15px'
//     },
//     footer: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '20px 25px',
//       backgroundColor: '#f8f9fa',
//       borderTop: '1px solid #e9ecef'
//     },
//     viewButton: {
//       backgroundColor: '#667eea',
//       color: 'white',
//       border: 'none',
//       padding: '12px 30px',
//       borderRadius: '50px',
//       fontSize: '0.95rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px'
//     },
//     viewButtonHover: {
//       backgroundColor: '#5a67d8',
//       transform: 'translateY(-2px)',
//       boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)'
//     },
//     stats: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '40px',
//       marginTop: '50px',
//       padding: '30px',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '15px'
//     },
//     statItem: {
//       textAlign: 'center'
//     },
//     statNumber: {
//       fontSize: '2.5rem',
//       fontWeight: '700',
//       color: '#667eea',
//       marginBottom: '5px'
//     },
//     statLabel: {
//       color: '#6c757d',
//       fontSize: '0.9rem'
//     },
//     loading: {
//       textAlign: 'center',
//       padding: '100px',
//       fontSize: '1.2rem',
//       color: '#6c757d'
//     },
//     noResults: {
//       textAlign: 'center',
//       padding: '80px',
//       gridColumn: '1 / -1'
//     }
//   };

//   if (loading) {
//     return (
//       <div style={styles.wrapper}>
//         <div style={styles.container}>
//           <div style={styles.loading}>
//             <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📚</div>
//             Loading Authors...
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.container}>
//         <header style={styles.header}>
//           <h1 style={styles.title}>📚 Literary Legends</h1>
//           <p style={styles.subtitle}>
//             Explore the lives and works of the world's most influential authors. 
//             Click on any author to discover their literary legacy.
//           </p>
//         </header>

//         <div style={styles.controls}>
//           <div style={styles.searchContainer}>
//             <div style={styles.searchIcon}>🔍</div>
//             <input
//               type="text"
//               placeholder="Search authors by name or nationality..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={styles.searchInput}
//             />
//           </div>

//           <div style={styles.filterGroup}>
//             <select 
//               value={selectedGenre} 
//               onChange={(e) => setSelectedGenre(e.target.value)}
//               style={styles.select}
//             >
//               {getAllGenres().map(genre => (
//                 <option key={genre} value={genre}>
//                   {genre === 'all' ? 'All Genres' : genre}
//                 </option>
//               ))}
//             </select>

//             <select 
//               value={sortBy} 
//               onChange={(e) => setSortBy(e.target.value)}
//               style={styles.select}
//             >
//               <option value="name">Sort by Name</option>
//               <option value="year">Sort by Year</option>
//               <option value="rating">Sort by Rating</option>
//             </select>
//           </div>
//         </div>

//         <div style={styles.grid}>
//           {filteredAndSortedAuthors.length > 0 ? (
//             filteredAndSortedAuthors.map((author) => (
//               <div 
//                 key={author.id}
//                 style={{
//                   ...styles.card,
//                   ...(hoverStates[author.id] && styles.cardHover)
//                 }}
//                 onClick={() => toggleAuthor(author.id)}
//                 onMouseEnter={() => handleCardHover(author.id, true)}
//                 onMouseLeave={() => handleCardHover(author.id, false)}
//               >
//                 <div style={styles.imageContainer}>
//                   <img 
//                     src={author.image} 
//                     alt={author.name} 
//                     style={{
//                       ...styles.image,
//                       ...(hoverStates[author.id] && styles.imageHover)
//                     }}
//                   />
//                   <div style={styles.badge}>
//                     {author.nationality}
//                   </div>
//                   <div style={styles.ratingBadge}>
//                     <span style={{ color: '#ffc107' }}>★</span>
//                     {author.rating} ({renderStarRating(author.rating)})
//                   </div>
//                 </div>

//                 <div style={styles.content}>
//                   <h2 style={styles.name}>{author.name}</h2>
                  
//                   <div style={styles.metaInfo}>
//                     <span>{author.birthYear} - {author.deathYear}</span>
//                     <span style={styles.lifespan}>
//                       {calculateLifespan(author.birthYear, author.deathYear)} years
//                     </span>
//                   </div>

//                   <p style={styles.description}>{author.description}</p>

//                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
//                     {author.genre.map((g, idx) => (
//                       <span 
//                         key={idx}
//                         style={{
//                           backgroundColor: '#e9ecef',
//                           padding: '5px 12px',
//                           borderRadius: '15px',
//                           fontSize: '0.85rem',
//                           color: '#495057'
//                         }}
//                       >
//                         {g}
//                       </span>
//                     ))}
//                   </div>

//                   {author.isExpanded && (
//                     <div style={styles.expandedContent}>
//                       <div style={styles.worksSection}>
//                         <h4 style={styles.worksTitle}>Notable Works:</h4>
//                         <ul style={styles.worksList}>
//                           {author.famousWorks.map((work, index) => (
//                             <li 
//                               key={index}
//                               style={{
//                                 ...styles.workItem,
//                                 ...(workHoverStates[author.id]?.[index] && styles.workItemHover)
//                               }}
//                               onMouseEnter={() => handleWorkHover(author.id, index, true)}
//                               onMouseLeave={() => handleWorkHover(author.id, index, false)}
//                             >
//                               📖 {work}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       {author.achievements && (
//                         <div style={styles.achievements}>
//                           <strong>Achievements: </strong>
//                           {author.achievements.join(' • ')}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>

//                 <div style={styles.footer}>
//                   <button 
//                     style={{
//                       ...styles.viewButton,
//                       ...(hoverStates[author.id] && styles.viewButtonHover)
//                     }}
//                     onMouseEnter={() => handleCardHover(author.id, true)}
//                     onMouseLeave={() => handleCardHover(author.id, false)}
//                   >
//                     {author.isExpanded ? 'Show Less' : 'View Details'}
//                     <span>{author.isExpanded ? '▲' : '▼'}</span>
//                   </button>
//                   <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
//                     {author.famousWorks.length} works
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div style={styles.noResults}>
//               <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📖</div>
//               <h3 style={{ color: '#6c757d', marginBottom: '10px' }}>
//                 No authors found
//               </h3>
//               <p style={{ color: '#adb5bd' }}>
//                 Try adjusting your search or filter criteria
//               </p>
//             </div>
//           )}
//         </div>

//         <div style={styles.stats}>
//           <div style={styles.statItem}>
//             <div style={styles.statNumber}>{authorsData.length}</div>
//             <div style={styles.statLabel}>Total Authors</div>
//           </div>
//           <div style={styles.statItem}>
//             <div style={styles.statNumber}>
//               {new Set(authorsData.map(a => a.nationality)).size}
//             </div>
//             <div style={styles.statLabel}>Nationalities</div>
//           </div>
//           <div style={styles.statItem}>
//             <div style={styles.statNumber}>
//               {authorsData.reduce((acc, author) => acc + author.famousWorks.length, 0)}
//             </div>
//             <div style={styles.statLabel}>Total Works</div>
//           </div>
//           <div style={styles.statItem}>
//             <div style={styles.statNumber}>
//               {(authorsData.reduce((acc, author) => acc + author.rating, 0) / authorsData.length).toFixed(1)}
//             </div>
//             <div style={styles.statLabel}>Avg. Rating</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthorSection;





import React from 'react';

function AuthorSection() {
  // مصفوفة مؤلفين حقيقية مع صور من ويكيبيديا/روابط مباشرة
  const authors = [
    { 
      id: 1, 
      name: "William Shakespeare", 
      nationality: "British", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg", 
      description: "The greatest playwright in the English language." 
    },
    { 
      id: 2, 
      name: "Jane Austen", 
      nationality: "British", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jane_Austen_coloured_version.jpg/220px-Jane_Austen_coloured_version.jpg", 
      description: "Known for her six major novels, including Pride and Prejudice." 
    },
    { 
      id: 3, 
      name: "Charles Dickens", 
      nationality: "British", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/220px-Dickens_Gurney_head.jpg", 
      description: "Created some of the world's best-known fictional characters." 
    },
    { 
      id: 4, 
      name: "Leo Tolstoy", 
      nationality: "Russian", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/220px-L.N.Tolstoy_Prokudin-Gorsky.jpg", 
      description: "Master of realistic fiction and author of War and Peace." 
    },
    { 
      id: 5, 
      name: "Virginia Woolf", 
      nationality: "British", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg/220px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg", 
      description: "A pioneer in the use of stream of consciousness as a narrative device." 
    },
    { 
      id: 6, 
      name: "Mark Twain", 
      nationality: "American", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/220px-Mark_Twain_by_AF_Bradley.jpg", 
      description: "The father of American literature." 
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="display-5 fw-bold text-center mb-5" style={{ color: '#2c3e50' }}>Famous Authors</h2>
      <div className="row g-4">
        {authors.map(author => (
          <div key={author.id} className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow text-center p-3" style={{ borderRadius: '20px', transition: 'transform 0.3s' }}>
              <div className="image-container mt-3">
                <img 
                  src={author.image} 
                  className="rounded-circle shadow-sm" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover', border: '5px solid #fdbb2d' }} 
                  alt={author.name} 
                />
              </div>
              <div className="card-body">
                <h5 className="fw-bold mb-1">{author.name}</h5>
                <span className="badge bg-light text-dark border mb-3">{author.nationality}</span>
                <p className="text-muted small px-2" style={{ height: '60px', overflow: 'hidden' }}>
                  {author.description}
                </p>
                <button className="btn btn-warning btn-sm rounded-pill px-4 fw-bold">View Works</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuthorSection;