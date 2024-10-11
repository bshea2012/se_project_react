import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { APIkey, coordinates } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  addItem,
  deleteItem,
  getCardData,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import {
  registerUser,
  loginUser,
  getUserInfo,
  editProfile,
} from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: "" },
    city: "",
  });
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    email: "",
    avatar: "",
    name: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onAddItem = (item, resetForm) => {
    handleAddItemSubmit(item, resetForm);
  };

  const handleAddItemSubmit = (item, resetForm) => {
    const token = getToken();
    if (!token) return;

    setIsLoading(true);
    addItem(item, token)
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        closeActiveModal();
        resetForm();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const openDeleteConfirmModal = () => {
    setActiveModal("delete");
    // setSelectedCard(card);
  };

  const handleCardDelete = (id) => {
    const token = getToken();
    if (!token) return;

    deleteItem(id, token)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onAddUser = (user, resetForm) => {
    handleAddUserSubmit(user, resetForm);
  };

  const handleAddUserSubmit = (user, resetForm) => {
    setIsLoading(true);
    registerUser(user)
      .then((data) => {
        setActiveModal("login");
        // navigate("/profile");
        // closeActiveModal();
        // resetForm();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const onLoginUser = (user, resetForm) => {
    handleLoginUserSubmit(user, resetForm);
  };

  const handleLoginUserSubmit = ({ email, password }, resetForm) => {
    if (!email || !password) {
      return;
    }

    setIsLoading(true);
    loginUser(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);

          const redirectPath = location.state?.from?.pathname || "/profile";
          navigate(redirectPath);
        }
        closeActiveModal();
        resetForm();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
  };

  const onEditProfile = (data) => {
    handleEditProfileSubmit(data);
  };

  const handleEditProfileSubmit = ({ name, avatar }) => {
    const token = getToken();
    if (!token) return;

    setIsLoading(true);
    editProfile({ name, avatar }, token)
      .then((res) => {
        setUserData(res.data);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleCardLike = (item, isLiked) => {
    const token = localStorage.getItem("jwt");

    const id = item._id;

    const action = !isLiked ? addCardLike : removeCardLike; // get the action

    action(id, token)
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === id ? updatedCard.data : item))
        );
      })
      .catch(console.error);
  };

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    getUserInfo(jwt)
      .then((res) => {
        setIsLoggedIn(true);
        setUserData(res.data);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getCardData()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleRemoteClick = (e) => {
      if (e.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleRemoteClick);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleRemoteClick);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={{ userData }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
                    <Profile
                      handleAddButtonClick={handleAddClick}
                      handleItemClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleEditProfileClick={handleEditProfileClick}
                      handleLogout={handleLogout}
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/profile" replace />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onAddItem={onAddItem}
            closeActiveModal={closeActiveModal}
            isLoading={isLoading}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteClick={openDeleteConfirmModal}
            handleCardDelete={handleCardDelete}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onAddUser={onAddUser}
            closeActiveModal={closeActiveModal}
            isLoading={isLoading}
            handleLoginClick={handleLoginClick}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onLoginUser={onLoginUser}
            closeActiveModal={closeActiveModal}
            isLoading={isLoading}
            handleRegisterClick={handleRegisterClick}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            closeActiveModal={closeActiveModal}
            isLoading={isLoading}
            onEditProfile={onEditProfile}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
