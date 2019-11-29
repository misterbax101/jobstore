import React from 'react';

import { VacancyModel } from './../types';
import VacanciesList from './vacancy/vacanciesList/VacanciesList';

interface HomeProps {
    vacancies: Array<VacancyModel>
    getVacancies: () => void
}

class Home extends React.Component<HomeProps, {}> {
    componentDidMount() {
        this.props.getVacancies();
    }
    render() {
        const { vacancies } = this.props;
        return (
            <VacanciesList
                vacancies={vacancies} />
        );
    }
}

export default Home;