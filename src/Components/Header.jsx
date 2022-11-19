import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Chung News" width="100" />
        </a>
        <a href="/" className="navbar-brand">
         Chung News
        </a>
      </nav>
    </header>
  );
};

export default Header;

// const Header = ({ }) => {
//   return (
//       <div class="container">
//           <div class="row">
//               <div class="col-md-12 text-center">
//                   <h1 class="animate-character" data-testid="header">Chung News</h1>
//               </div>
//           </div>
//       </div>

//   )
// }

// export default Header; 
