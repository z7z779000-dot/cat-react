// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thank you for reaching out! We will get back to you soon.");
//   };

//   return (
//     <div className="container my-5 py-5">
//       <div className="row g-5">
//         {/* Contact Information Section */}
//         <div className="col-lg-5">
//           <h2 className="fw-bold mb-4">Get In Touch</h2>
//           <p className="text-muted mb-4">
//             Have a question about a book or need help with your order? Our team is here to assist you.
//           </p>
          
//           <div className="d-flex mb-4">
//             <div className="bg-primary text-white p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
//               <i className="bi bi-geo-alt-fill"></i>
//             </div>
//             <div>
//               <h5 className="mb-0 fw-bold">Address</h5>
//               <p className="text-muted">123 Library Street, Culture District, NY</p>
//             </div>
//           </div>

//           <div className="d-flex mb-4">
//             <div className="bg-success text-white p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
//               <i className="bi bi-telephone-fill"></i>
//             </div>
//             <div>
//               <h5 className="mb-0 fw-bold">Phone</h5>
//               <p className="text-muted">+1 234 567 890</p>
//             </div>
//           </div>

//           <div className="d-flex mb-4">
//             <div className="bg-warning text-dark p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
//               <i className="bi bi-envelope-at-fill"></i>
//             </div>
//             <div>
//               <h5 className="mb-0 fw-bold">Email</h5>
//               <p className="text-muted">support@bookstore.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="col-lg-7">
//           <div className="card border-0 shadow p-4">
//             <form onSubmit={handleSubmit}>
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">Full Name</label>
//                   <input 
//                     type="text" 
//                     className="form-control p-3" 
//                     placeholder="Enter your name"
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     required 
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">Email Address</label>
//                   <input 
//                     type="email" 
//                     className="form-control p-3" 
//                     placeholder="name@example.com"
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     required 
//                   />
//                 </div>
//                 <div className="col-12">
//                   <label className="form-label fw-semibold">Subject</label>
//                   <input 
//                     type="text" 
//                     className="form-control p-3" 
//                     placeholder="How can we help you?"
//                     onChange={(e) => setFormData({...formData, subject: e.target.value})}
//                   />
//                 </div>
//                 <div className="col-12">
//                   <label className="form-label fw-semibold">Message</label>
//                   <textarea 
//                     className="form-control p-3" 
//                     rows="5" 
//                     placeholder="Write your message here..."
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="col-12 mt-4">
//                   <button type="submit" className="btn btn-dark btn-lg w-100 shadow-sm py-3">
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  // حالة لإدخالات الفورم
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // حالة لحفظ البيانات بعد الضغط على Submit لعرضها
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // نقوم بنسخ البيانات الحالية وتخزينها للعرض
    setSubmittedData({ ...formData });
    alert("Data Received Successfully!");
  };

  return (
    <div className="container my-5 py-5">
      <div className="row g-5">
        {/* Left Side: Contact Info */}
        <div className="col-lg-5">
          <h2 className="fw-bold mb-4">Get In Touch</h2>
          <div className="mb-4 d-flex align-items-center">
            <div className="bg-primary text-white p-3 rounded-circle me-3"><i className="bi bi-geo-alt-fill"></i></div>
            <div><h6 className="mb-0">Address</h6><small className="text-muted">123 Library St, NY</small></div>
          </div>
          {/* ... بقية أيقونات التواصل ... */}
        </div>

        {/* Right Side: Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow p-4 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" 
                    onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark w-100 py-2">Submit</button>
                </div>
              </div>
            </form>
          </div>

          {/* عرض البيانات بعد الإرسال */}
          {submittedData && (
            <div className="card border-0 shadow-sm bg-light p-4 animate__animated animate__fadeIn">
              <h4 className="text-success mb-3">Submitted Information:</h4>
              <ul className="list-group list-group-flush bg-transparent">
                <li className="list-group-item bg-transparent"><strong>Name:</strong> {submittedData.name}</li>
                <li className="list-group-item bg-transparent"><strong>Email:</strong> {submittedData.email}</li>
                <li className="list-group-item bg-transparent"><strong>Message:</strong> {submittedData.message}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;