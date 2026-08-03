import "../styles/homelayoyt.css";
import mainheroimg from "../assets/mainheroimg1.png";
import microscope from "../assets/microscope.png";
import FirstCardRow from "./homeFirstCardRow";
import SecCardRow from "./homeSecCardRow";
import ThirdCardRow from "./homeTrdCardRow";
import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <div class="container-fluid p-0">
      <div
        className="backdiv"
        style={{
          backgroundImage: `url(${mainheroimg})`,
        }}
      >
        <div
          class="container h-100 w-50 d-flex flex-column  bg-transparent position-absolute z-3  pt-4 ps-5"
          // style={{ width: "30%", marginTop: "100px", marginLeft: "80px" }}
        >
          <div class="row w-100">
            <p style={{ fontSize: "60px", lineHeight: "65px" }}>
              <span style={{ fontSize: "65px" }}>For your</span> <br></br>
              <span style={{ color: "#dc2626" }}>Wellness</span>
            </p>
          </div>
          <p style={{ fontSize: "18px" }}>
            Forwell Pharmaceuticals is committed to providing high-quality
            medicines that improve lives and build a healthier tommorrow.
          </p>
          <Link to="/aboutus" className="nav-link active">
            <button
              class="p-2 border rounded-4  text-white  mainPicBtn"
              style={{ backgroundColor: "#dc2626" }}
            >
              Explore Our Products
              <i
                class="fa-solid fa-arrow-right  p-1"
                style={{ color: "white" }}
              ></i>
            </button>
          </Link>
        </div>
      </div>
      {/* second div starts */}
      <div className="container-fluid border-danger" style={{}}>
        <div>
          <FirstCardRow />
        </div>
        <div className="row p-4 ">
          <div className="col-md-6  ">
            <div className="row ">
              <p
                className="text-[25px] font-normal "
                style={{ color: "#dc2626" }}
              >
                About Us..
              </p>
            </div>
            <div className="row ">
              <p className="text-[35px] font-semibold">
                Dedicated to <br></br>
                <span style={{ color: "#dc2626" }}>Better Healthcare</span>
              </p>
            </div>
            <div className="row">
              <p>
                Forewell Pharmaceuticals is a trusted name in the healthcare
                insdusty.We develop,manufacture and market a wide range of
                quality pharmaceutical dormulations.
              </p>
            </div>
            <div className="row">
              <p>
                Backed by modern infrastructure, a dedicated team and a strong
                distribution network,we are committed to delivering effective
                and affordable medicines.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/aboutus" className="nav-link active">
                  <button
                    className="border p-2 rounded-4"
                    style={{ color: "white", backgroundColor: "#dc2626" }}
                  >
                    Know More About Us{" "}
                    <i
                      class="fa-solid fa-arrow-right "
                      style={{ color: "white" }}
                    ></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={microscope} alt="Hero" />
          </div>
        </div>
      </div>
      <div className="SecCardRow">
        <SecCardRow />
      </div>
      <div className="ThirdCadRow">
        <ThirdCardRow />
      </div>
    </div>
  );
}

export default HomeLayout;
