import {styled} from '@mui/material';

export const Wrapper = styled('div')<{
    bgImage: string
}>`
  background-image: ${({bgImage}) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;