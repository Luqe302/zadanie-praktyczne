import {Section} from "@/common/components/Section/Section";
import * as S from './Dashboard.styles';
import {TextWithBackground} from "@/common/components/TextWithBackground/TextWithBackground";
import houseBackground from '../../../../public/assets/images/house-background.png'
import grassBackground from '../../../../public/assets/images/grass-background.png'

export const Dashboard = () => {
    return <S.Wrapper>
        <Section title={'Kilka słów o nas'} subTitle={'Czyli kim jesteśmy i dokąd zmierzamy'}
                 text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis urna. Aliquam erat volutpat. Aenean porttitor fermentum enim et cursus. In quis nunc at mi dignissim dapibus vel eu leo. Vestibulum in nisi quis diam convallis faucibus eu a magna. Praesent nunc massa, consectetur at ex at, finibus blandit sem. Curabitur rutrum elit tempor lectus bibendum faucibus.\n' +
                     '\n' +
                     'Nam est nisl, rutrum a volutpat id, aliquam id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id interdum magna. Duis tincidunt gravida velit, id varius nulla pellentesque at. Integer a luctus metus, ut ultrices risus. Mauris et dapibus nulla. Aenean eleifend lectus ac dolor placerat, eget imperdiet odio dapibus. Donec luctus tincidunt sodales. Nunc malesuada, tellus mattis pulvinar dictum, elit velit dapibus nisi, et feugiat sem purus sed felis. In sed iaculis elit. Vestibulum ornare nisi sit amet lacinia molestie. Sed sed lacus sapien.'}
                 buttonText={'Zobacz więcej'}
                 buttonUrl={'/posts'}
        />
        <S.Image src={grassBackground.src} alt='Background image'/>
        <TextWithBackground bgImage={houseBackground.src}>
            <S.ServicesList>
                <p>Budowa domów z drewna</p>
                <p>Budowa bram wjazdowych</p>
                <p>Wykończenie wnętrz</p>
                <p>Altany ogrodowe</p>
                <p>Kamienne elementy chitektury</p>
                <p>Remonty</p>
            </S.ServicesList>
        </TextWithBackground>
        <Section title={'Nasza oferta'} subTitle={'Dowiedz się co możemy Tobie zaoferować'}
                 text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec facilisis urna. Aliquam erat volutpat. Aenean porttitor fermentum enim et cursus. In quis nunc at mi dignissim dapibus vel eu leo. Vestibulum in nisi quis diam convallis faucibus eu a magna. Praesent nunc massa, consectetur at ex at, finibus blandit sem. Curabitur rutrum elit tempor lectus bibendum faucibus.\n' +
                     '\n' +
                     'Nam est nisl, rutrum a volutpat id, aliquam id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id interdum magna. Duis tincidunt gravida velit, id varius nulla pellentesque at. Integer a luctus metus, ut ultrices risus. Mauris et dapibus nulla. Aenean eleifend lectus ac dolor placerat, eget imperdiet odio dapibus. Donec luctus tincidunt sodales. Nunc malesuada, tellus mattis pulvinar dictum, elit velit dapibus nisi, et feugiat sem purus sed felis. In sed iaculis elit. Vestibulum ornare nisi sit amet lacinia molestie. Sed sed lacus sapien.'}
                 buttonText={'Zobacz więcej'}
                 buttonUrl={'/posts'}
        />
    </S.Wrapper>
}