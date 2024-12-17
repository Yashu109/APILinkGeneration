// import "./Header.css";
// import logo from "../../assets/TrispiderLogo.avif";
// import { MdArrowDropDown } from "react-icons/md";
// import { CgSearch } from "react-icons/cg";
// const Header = () => {
//   return (
//     <header className="header">


//       <div className="main-header">
//         <div className="logo-section">
//           <img src={logo} alt="Think Robotics Logo" className="logo" />
//         </div>

//         <div className="center-section">


//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="search-input"
//             />
//             <button className="search-button">
//               <i className="CgSearch"><CgSearch /></i>
//             </button>
//           </div>
//         </div>

//         <div className="right-section">
//           <div className="cart">
//             <i className="fas fa-shopping-cart"></i>
//             <span className="cart-badge">0</span>
//             <button className="cart-total">TOTAL ₹0.00</button>
//           </div>
//           {/* <button className="account-button">My Account</button> */}
//         </div>
//       </div>
//       <div className="menu-bar_Account">
//         <div className="menu-bar">
//           <div className="dropdown">
//             <span className="dropdown-text">
//               Home
//             </span>
//           </div>
//           <div className="dropdown">

//             <span className="dropdown-text">
//               Branch  <i className="arrow-down"><MdArrowDropDown /></i>
//             </span>
//             <div className="dropdown-menu">
//               <ul>
//                 <li>AI & ML</li>
//                 <li>Mechanical Engineering</li>
//                 <li>Mechatronics Engineering</li>
//                 <li>EEE</li>
//                 <li>ISE</li>
//                 <li>CSE</li>
//                 <li>Aeronautics</li>
//                 <li>Electonics Engineering</li>
//               </ul>
//             </div>
//           </div>
//           <div className="dropdown">
//             <span className="dropdown-text">
//               Intership <i className="arrow-down" ><MdArrowDropDown /></i>
//             </span>
//             <div className="dropdown-menu">
//               <ul>
//                 <li>Intership</li>
//                 {/* <li>Makers Hub</li>
//                 <li>Electrical</li>
//                 <li>Mechanical</li>
//                 <li>Services</li>
//                 <li>Community</li> */}
//               </ul>
//             </div>
//           </div>
//           <div className="dropdown">
//             <span className="dropdown-text">
//               3D Print  <i className="arrow-down"><MdArrowDropDown /></i>
//             </span>
//             <div className="dropdown-menu">
//               <ul>
//                 <li>Services</li>
//                 {/* <li>Makers Hub</li>
//                 <li>Electrical</li>
//                 <li>Mechanical</li>
//                 <li>Services</li>
//                 <li>Community</li> */}
//               </ul>
//             </div>
//           </div>
//           <div className="dropdown">
//             <span className="dropdown-text">
//               Web & App  <i className="arrow-down"><MdArrowDropDown /></i>
//             </span>
//             <div className="dropdown-menu">
//               <ul>
//                 <li>Web & App</li>
//                 {/* <li>Makers Hub</li>
//                 <li>Electrical</li>
//                 <li>Mechanical</li>
//                 <li>Services</li>
//                 <li>Community</li> */}
//               </ul>
//             </div>
//           </div>
//           <div className="dropdown">
//             <span className="dropdown-text">
//               Gfits  <i className="arrow-down"><MdArrowDropDown /></i>
//             </span>
//             <div className="dropdown-menu">
//               <ul>
//                 <li>Gfits</li>
//                 {/* <li>Makers Hub</li>
//                 <li>Electrical</li>
//                 <li>Mechanical</li>
//                 <li>Services</li>
//                 <li>Community</li> */}
//               </ul>
//             </div>
//           </div>
//           <div className="dropdown">
//             <span className="dropdown-text">
//               PCB Designing  <i className="arrow-down"><MdArrowDropDown /></i>
//             </span>
//             <div className="dropdown-menu">
//               <ul>
//                 <li>PCB Designing</li>
//                 {/* <li>Makers Hub</li>
//                 <li>Electrical</li>
//                 <li>Mechanical</li>
//                 <li>Services</li>
//                 <li>Community</li> */}
//               </ul>
//             </div>
//           </div>
//         </div>
          
//           <div className="Account-button-section">
//             <button className="account-button">My Account</button>
//           </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import "./Header.css";
import logo from "../../assets/TrispiderLogo.avif";
import { MdArrowDropDown } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // To track which dropdown is open

  // Toggle menu visibility for mobile view
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle the dropdown visibility
  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };
  
  return (
    <header className="header">
      {/* Main Header Section */}
      <div className="main-header">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="Think Robotics Logo" className="logo" />
        </div>

        {/* Center Section */}
        <div className="center-section">
  {/* Search Bar */}
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search for products..."
      className="search-input"
    />
    <button className="search-button" aria-label="Search">
      <CgSearch />
    </button>
  </div>

  {/* Cart Section */}
  <div className="cart">
    <FaShoppingCart aria-label="Shopping Cart" />
    <span className="cart-badge">0</span>
    <button className="cart-total">TOTAL ₹0.00</button>
  </div>
</div>

      </div>

      {/* Menu Bar Section */}
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Menu Bar Section */}
      <nav className={`menu-bar_Account ${menuOpen ? "open" : ""}`}>
        {/* Menu Bar */}
        <div className="menu-bar">
          {[
            { title: "Home" },
            {
              title: "Branch",
              submenu: [
                "AI & ML",
                "Mechanical Engineering",
                "Mechatronics Engineering",
                "EEE",
                "ISE",
                "CSE",
                "Aeronautics",
                "Electronics Engineering",
              ],
            },
            { title: "Internship", submenu: ["Internship"] },
            { title: "3D Print", submenu: ["Services"] },
            { title: "Web & App", submenu: ["Web & App"] },
            { title: "Gifts", submenu: ["Gifts"] },
            { title: "PCB Designing", submenu: ["PCB Designing"] },
          ].map((item, index) => (
            <div key={index} className="dropdown">
              <span
                className="dropdown-text"
                onClick={() => handleDropdownToggle(index)}
              >
                {item.title} {item.submenu && <MdArrowDropDown />}
              </span>
              {item.submenu && dropdownOpen === index && (
                <div className="dropdown-menu">
                  <ul>
                    {item.submenu.map((subitem, subIndex) => (
                      <li key={subIndex}>{subitem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Account Button Section */}
        <div className="Account-button-section">
          <button className="account-button">My Account</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
