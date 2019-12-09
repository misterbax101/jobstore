import React from 'react';

import { VacancyModel } from '../../../types';
import VacanciesListItem from './VacanciesListItem';
import { CardLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { routes } from '../../../constants';

interface VacanciesListProps {
    vacancies: Array<VacancyModel>
}

const VacanciesList: React.FC<VacanciesListProps> = ({ vacancies }) => {

    const renderVacancyActions = ({ id }: VacancyModel) => {
        return <CardLink
            tag={Link}
            to={`${routes.vacancyDetails}/${id}`}>
            Go to get more details
     </CardLink>;
    }

    return (
        <>
            {vacancies.map(vacancy =>
                <VacanciesListItem
                    key={vacancy.id}
                    vacancy={vacancy}
                    renderActions={renderVacancyActions}/>)}
        </>);
}

export default VacanciesList;
