import React from 'react';
import PropTypes from 'prop-types';
import { Container, HumburgerButton, DropdownContainer, List, ListItem } from './Dropdown.styled';
// import styled from 'styled-components';
// import styles from './Dropdown.module.css';

// const StyledButton = styled.button`
// 	display: inline-block;
// 	background-color: teal;
// 	color: #fff;
// `;



const Dropdown = ({ isOpen = false }) => (
	<Container>
		{/* <StyledButton>adsfasdfasdf</StyledButton> */}
		<HumburgerButton type="button">
			&#9776;
		</HumburgerButton>

		{isOpen && <DropdownContainer>
			<List>
				<ListItem>Option 1</ListItem>
				<ListItem>Option 2</ListItem>
				<ListItem>Option 3</ListItem>
				<ListItem>Option 4</ListItem>
			</List>
		</DropdownContainer>}
		{/* {isOpen && (
			<div className={styles.dropdown}>
				<ul className={styles.menu}>
					<li className={styles.menuItem}>Option 1</li>
					<li className={styles.menuItem}>Option 2</li>
					<li className={styles.menuItem}>Option 3</li>
					<li className={styles.menuItem}>Option 4</li>
				</ul>
			</div>
		)} */}
	</Container>
);

// Dropdown.propTypes = {
// 	isOpen: PropTypes.bool,
// };


export default Dropdown;