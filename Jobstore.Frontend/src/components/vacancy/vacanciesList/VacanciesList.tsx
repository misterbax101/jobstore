import React from 'react';

import { VacancyModel } from '../../../types';
import VacanciesListItem from './VacanciesListItem';

interface VacanciesListProps {
    vacancies: Array<VacancyModel>
}

const VacanciesList: React.FC<VacanciesListProps> = ({ vacancies }) => {
    return (
        <>
            {vacancies.map(vacancy =>
                <VacanciesListItem
                    key={vacancy.id}
                    className="mb-1"
                    vacancy={vacancy} />)}
        </>);
}

export default VacanciesList;
