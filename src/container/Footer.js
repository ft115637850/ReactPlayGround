import { connect } from 'react-redux';
import React from 'react'; 
import Link from '../presentation/Link'
const mapStateToProps = (
    state,
    ownProps
) => {
	return {
        active: ownProps.filter === state.visibilityFilter
	};
};

const mapDispatchToProps = (
    dispatch,
    ownProps
 ) => {
	return {
		onClick: (id) => {
            dispatch({ 
                type:'SET_VISIBILITY_FILTER', 
                filter:ownProps.filter
            });
        }
	};
};
const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

const Footer = () => (
    <p>
        Show: {' '}
        <FilterLink filter='SHOW_ALL'> All </FilterLink>{' '}
        <FilterLink filter='SHOW_ACTIVE'> Active </FilterLink>{' '}
        <FilterLink filter='SHOW_COMPLETED'> Completed </FilterLink>
    </p>
);

export default Footer;