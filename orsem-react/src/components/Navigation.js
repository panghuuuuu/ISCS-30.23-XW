import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Navigation.scss";
import logo from "../assets/mithi_logo.webp";
import { Accordion } from "semantic-ui-react";
import axiosInstance from "../axiosApi";
import { Link } from "react-router-dom";

const ProgramLinks = [
  {
    title: "Admin Talks",
    link: "admintalks",
  },
  {
    title: "Student Life Series",
    link: "sls",
  },
];

const NavDesktop = () => {
  // const [, setDays] = React.useState([]);
  const [name, setName] = React.useState(null);
  const [entry, setEntry] = React.useState(null);
  const [idNumber] = React.useState(localStorage.getItem("id_number"));
  React.useEffect(() => {
    // axiosInstance.get(`/days/`).then((val) => {
    // if (val.data === null) {
    // val.data = [];
    // }

    // const filteredDays = val.data.filter(
    // (day) => new Date(day.date) <= new Date(), // ); // filteredDays.sort((a, b)=> (a.date > b.date ? 1 : -1));
    // setDays(filteredDays);
    // });
    axiosInstance
      .get(`/blockinfo/students/${idNumber}/`)
      .then((val) => {
        setName(val.data.name);
        setEntry(val.data.entry_pass);
      })
      .catch((error) => {
        console.error(error);
      });
    // .catch(
    // (error) => {
    // window.location.href = '/';
    // }
    // )
  }, [idNumber]);
  // Desktop Nav
  return (
    <nav className="computer only row bg-primaryBlue !justify-evenly">
      <div className="pt-2 pl-[2%] sm:pl-[3%] bg-none">
        <NavLink exact to="/">
          <img
            className="w-[4.5em] mt-[5px]"
            src={logo}
            alt="OrSem 2024: Mithi White Logo"
          />
        </NavLink>
      </div>
      <div className="right menu">
        <NavLink exact className="item" to="/home">
          home
        </NavLink>
        <div
          role="listbox"
          aria-expanded="false"
          className="ui simple item dropdown nav-program"
          tabIndex="0"
        >
          <div
            className="text !flex"
            role="alert"
            aria-live="polite"
            aria-atomic="true"
          >
            activities
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="menu transition d-flex justify-content-even align-items-start">
            {ProgramLinks.map((link, index) => (
              <NavLink
                exact
                className="menu-item d1 program-menu-item"
                to={`/program/${link.link}`}
                key={index}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
        <NavLink exact className="item" to="/map">
          map
        </NavLink>
        <NavLink exact className="item" to="/journals">
          journals
        </NavLink>
        {name && (
          <NavLink exact className="item" to="/block">
            my block
          </NavLink>
        )}
        <NavLink exact className="item" to="/merch">
          merch
        </NavLink>
        <NavLink exact className="item" to="/history">
          history
        </NavLink>
        <NavLink exact className="item" to="/faq">
          faqs
        </NavLink>
        <NavLink exact className="item" to="/contact">
          contact
        </NavLink>
        {/* <NavLink exact className="item" to="/virtual-id">
                Virtual ID
            </NavLink> */}
        {/* <NavLink exact className="item" to="/entry-pass">
                Entry Pass
            </NavLink> */}
        {name && (
          <Link to={"/entry-pass"}>
            <div className="bg-primaryWhite text-primaryBlue rounded-full font-bold px-4 py-5">
              {"Download Entry Pass"}
            </div>
          </Link>
        )}
        {!name && (
          <Link to={"/"}>
            <div className="bg-primaryWhite text-primaryBlue rounded-full font-bold px-12 py-5">
              {"Login"}
            </div>
          </Link>
        )}
        {/*

            {/* <NavLink exact className="item" to="/search">
                <img className="search" src={search} alt="search" />
            </NavLink> */}
      </div>
    </nav>
  );
};

const NavMobile = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const name = localStorage.getItem("name");
  return (
    // Mobile Nav
    <nav className="tablet mobile only row bg-primaryBlue">
      <NavLink exact className="pt-[0.18rem] w-[5.9em] pl-[4%]" to="/">
        <img
          id="orsem-logo"
          className="mt-2.5 ml-0.5"
          src={logo}
          alt="OrSem 2024: Mithi White Logo"
        />
      </NavLink>
      <div className="right menu" ref={node}>
        {name && (
          <div className="mt-4 mr-4">
            <span className="bg-primaryWhite rounded-md drop-shadow-md text-primaryBlue flex justify-center text-center items-center px-3 h-[60%] font-bold py-5">
              <Link to={"/entry-pass"}>GET ENTRY PASS</Link>
            </span>
          </div>
        )}
        <Burger open={open} setOpen={setOpen} />
      </div>
      <Menu open={open} setOpen={setOpen} />
    </nav>
  );
};

const ProgramDropdown = ({ setOpen }) => {
  const [active, setActive] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Title active={active} onClick={() => setActive(!active)}>
        <span className="item">activities</span>
      </Accordion.Title>
      <Accordion.Content active={active}>
        <div className="d-flex justify-content-even align-items-start">
          <div className="flex-col">
            {ProgramLinks.map((link, index) => (
              <NavLink
                exact
                className="item"
                to={`/program/${link.link}`}
                key={index}
                onClick={() => {
                  setActive(!active);
                  setOpen(false);
                }}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </Accordion.Content>
    </Accordion>
  );
};

const Menu = ({ open, setOpen }) => {
  const [name, setName] = React.useState(null);
  const [entry, setEntry] = React.useState(null);
  /* const [idNumber] = React.useState(localStorage.getItem('id_number'));

    React.useEffect(() => {
    axiosInstance.get(`/blockinfo/students/${idNumber}/`).then((val) => {
    setName(val.data.name);
    });
    }, [idNumber]); */
  const [idNumber] = React.useState(localStorage.getItem("id_number"));
  React.useEffect(() => {
    axiosInstance
      .get(`/blockinfo/students/${idNumber}/`)
      .then((val) => {
        setName(val.data?.name);
        setEntry(val.data?.entry_pass);
      })
      .catch((error) => {
        console.error(error);
      });
    // .catch(
    // (error) => {
    // window.location.href = '/';
    // }
    // )
  }, [idNumber]);

  return (
    <div
      className={
        open
          ? "ui vertical accordion borderless fluid menu open !bg-primaryBlue"
          : "ui vertical accordion borderless fluid menu close"
      }
    >
      <NavLink exact className="item" to="/home" onClick={() => setOpen(false)}>
        home
      </NavLink>
      {/* <NavLink exact className="item" to="/comingsoon">program</NavLink> */}
      <ProgramDropdown open={open} setOpen={setOpen} />
      <NavLink exact className="item" to="/map" onClick={() => setOpen(false)}>
        map
      </NavLink>
      <NavLink
        exact
        className="item"
        to="/journals"
        onClick={() => setOpen(false)}
      >
        journals
      </NavLink>
      {idNumber && (
        <NavLink
          exact
          className="item"
          to="/block"
          onClick={() => setOpen(false)}
        >
          my block
        </NavLink>
      )}
      <NavLink
        exact
        className="item"
        to="/merch"
        onClick={() => setOpen(false)}
      >
        merch
      </NavLink>
      <NavLink
        exact
        className="item"
        to="/history"
        onClick={() => setOpen(false)}
      >
        history
      </NavLink>
      <NavLink exact className="item" to="/faq" onClick={() => setOpen(false)}>
        faqs
      </NavLink>
      <NavLink
        exact
        className="item"
        to="/contact"
        onClick={() => setOpen(false)}
      >
        contact
      </NavLink>
      {name && (
        <div className="item">
          <Link to={"/entry-pass"} onClick={() => setOpen(false)}>
            {"Download Entry Pass"}
          </Link>
        </div>
      )}
      {/*<NavLink exact className="item" to="/virtual-id" onClick={()=> setOpen(false)}
            >
            Virtual ID
        </NavLink>*/}

      {/*
        <NavLink exact className="item" to="/entry-pass" onClick={()=> setOpen(false)}
            >
            entry pass
        </NavLink> */}
      {name && <div className="item">{name}</div>}
      {/* <NavLink exact className="item" to="/search">
            <img className="search" src={search} alt="search" />
        </NavLink> */}
    </div>
  );
};

const Burger = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className={open ? "burger open" : "burger"}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

class Navigation extends React.Component {
  render() {
    return (
      <header className="ui fixed borderless menu">
        <div className="ui grid">
          <NavDesktop />
          <NavMobile />
        </div>
      </header>
    );
  }
}

export default Navigation;
