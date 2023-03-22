import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: grid;

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Image = styled('img')`
  max-width: 100%;
`

export const ServicesList = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`
