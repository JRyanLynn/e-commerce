import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h1`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;



const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Chingu</Logo>

            <Description>
                To travel is to learn. To be a friend is to help those that travel learn fun lessons instead of hard ones. We provide that path. 
            </Description>

            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon />
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>

                <SocialIcon color="E60023">
                    <PinterestIcon />
                </SocialIcon>

            </SocialContainer>

        </Left>

        <Center>
            <Title>Shortcuts</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Travel Essentials</ListItem>
                <ListItem>Cycling Gear</ListItem>
                <ListItem>Extras</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Track Order</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms of Service</ListItem>
            </List>

        </Center>

        <Right>
            <Title>Contact</Title>
            
            <ContactItem> <LocationOnIcon style={{marginRight: "10px"}}/>1021 N Rocky Way, Portland, OR 97202</ContactItem>

            <ContactItem><PhoneIcon style={{marginRight: "10px"}}/>+1-503-222-2222</ContactItem>

            <ContactItem><MailIcon style={{marginRight: "10px"}}/>help@chingu.org</ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        
        </Right>

    </Container>
  )
}

export default Footer