import styled from 'styled-components';
import {
    currentTheme
} from './globalTheme';

export const MainContainer = styled.View `
    flex: 1;
	background-color: ${currentTheme.primaryColor};
	justify-content: center;
	align-items: center;
`;

export const MainFont = styled.Text `
    font-size: 24px;
	font-weight: 500;
    color: ${currentTheme.secondaryColor};
`;