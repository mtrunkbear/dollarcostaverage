const NavBar = () => {
    const [isMenu, setIsMenu] = useState(true);
    const size = useWindowSize();
  
    useEffect(() => {
      if (size.width > 700) {
        setIsMenu(true);
      } else {
        setIsMenu(false);
      }
    }, [size.width]);

    const navBarContainerStyle =
      window.innerWidth < 700
        ? isMenu
          ? {
              display: "absolute",
              zIndex: "1",
              marginBottom: "-15%",
              opacity: "0.95",
            }
          : { height: "5%" }
        : {};
    const xmarkStyle =
      window.innerWidth < 700 ? (isMenu ? {} : { display: "none" }) :  {display:'none'};
    const barsSyle =
      window.innerWidth < 700 ? (isMenu ? { display: "none" } : {}) : {display:'none'};
    const navBarUlStyle =
      window.innerWidth < 700 ? (isMenu ? {} : { display: "none" }) : {};

    return (
      <nav className="navbar" style={navBarContainerStyle}>
        <i
          className="fa-solid fa-xmark"
          style={xmarkStyle}
          onClick={() => setIsMenu(false)}
        />
        <i
          className="fa-solid fa-bars"
          style={barsSyle}
          onClick={() => setIsMenu(true)}
        ></i>
        <ul style={navBarUlStyle}>
          <li>
            <Link to="/" onClick={() => setIsMenu(false)}>
              Dolar Cost Average
            </Link>
          </li>
          <li>
            <Link to="/SharpeRatio" onClick={() => setIsMenu(false)}>
              Sharp Ratio
            </Link>
          </li>
          <li>
            <Link to="/Prices" onClick={() => setIsMenu(false)}>
              Prices
            </Link>
          </li>
          <li>
            <Link to="/PriceReturns" onClick={() => setIsMenu(false)}>
              Price Returns
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;