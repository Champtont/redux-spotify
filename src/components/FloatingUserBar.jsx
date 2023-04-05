import { useSelector } from "react-redux";

const FloatingUserBar = () => {
  return (
    <div id="user-bar" className="">
      <div
        className="container d-flex justify-content-between"
        style={{ width: "84%", marginRight: "0" }}
      >
        <div id="arrows" className="d-flex justify-content-between">
          <a>
            <div id="left">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.535 3.515L7.05005 12L15.535 20.485L16.95 19.071L9.87805 12L16.95 4.929L15.535 3.515Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
          <a>
            <div id="right">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.46495 20.485L16.95 12L8.46495 3.515L7.04995 4.929L14.122 12L7.04995 19.071L8.46495 20.485Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div
          id="userdropdown"
          className="d-flex align-items-center rounded-pill px-1"
        >
          <div id="userprofile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>
          <div id="username" className="d-flex mr-2">
            User
          </div>
          <div id="droparrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14.5L17 9.5H7L12 14.5Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingUserBar;
