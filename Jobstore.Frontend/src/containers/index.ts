import Home from './home/Home'
import Login from './user/Login.container';
import SignUp from './user/SignUp.container';
import UserProfile from './user/UserProfile.container';
import AddVacancy from './vacancy/AddVacancy.container';
import EditVacancy from './vacancy/EditVacancy.container';
import VacancyDetails from './vacancy/VacancyDetails.container';
import VacanciesList from './vacancy/VacanciesList.container';

export const vacancy =  {
    AddVacancy,
    EditVacancy,
    VacancyDetails,
    VacanciesList
}

export const user = {
    Home,
    Login,
    SignUp,
    UserProfile
} 