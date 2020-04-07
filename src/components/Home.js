/** Import React Module */
import React from 'react';

/** Import Alice Carousel Module */
import AliceCarousel from 'react-alice-carousel';

/** Import Semantic UI React Module */
import {
	Container,
	Segment,
	Image,
	Card,
	Button,
	Grid,
} from 'semantic-ui-react';

/** Import Footer Styling */
import '../styles/footer.css';

/** Import Alice Carousel Styling */
import 'react-alice-carousel/lib/alice-carousel.css';

/** Import Home Page Styling */
import '../styles/Home.css';

/** Import Cooperators Logo Image */
import logo from '../assets/Cooperators-logo.png';

/** Import withRouter from React Router DOM */
import { withRouter } from 'react-router-dom';

import AnimatedLogo from './Logo.js';

/** Create Home Component */
class Home extends React.Component {
	navigate = (path) => {
		this.props.history.push(path);
	};
	/** Render Component */
	render() {
		const items = { 0: { items: 3 } };
		return (
			/** UI Container */
			<Container style={{ margin: 20 }}>
				<Segment size="small">
					<Grid columns={3}>
						<Grid.Row>
							<Grid.Column textAlign="center" verticalAlign="middle" width={2}>
								<Button
									basic
									onClick={() => this.imageCarousel.slidePrev()}
									icon="chevron left"
									color="blue"
									circular></Button>
							</Grid.Column>
							<Grid.Column textAlign="center" verticalAlign="middle" width={12}>
								<AliceCarousel
									className="carousel"
									ref={(el) => (this.imageCarousel = el)}
									buttonsDisabled={true}>
									<Image src={logo} centered />
									<Image src={logo} centered />
									<Image src={logo} centered />
								</AliceCarousel>
							</Grid.Column>
							<Grid.Column textAlign="center" verticalAlign="middle" width={2}>
								<Button
									basic
									onClick={() => this.imageCarousel.slideNext()}
									icon="chevron right"
									color="blue"
									circular></Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<Segment size="small">
					<Card centered fluid={true}>
						<h1 style={{ paddingTop: '10px', margin: '0', color: '#00aeef' }}>
							WHO ARE WE?
						</h1>
						<Card.Content>
							<Grid columns={2}>
								<Grid.Row>
									<Grid.Column verticalAlign="middle">
										<Card.Description textAlign="center">
											<p style={{ color: '#00aeef' }}>
												The office is an open concept collaborative space
												specifically setup for our team only. We embrace new
												solutions, technologies and processes. We're just as
												passionate about our team as we are about our clients.
												We're a team of individuals who want to apply creativity
												and experience to shape the future of our solutions.
											</p>
										</Card.Description>
									</Grid.Column>
									<Grid.Column>
										<Image src={logo} />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column></Grid.Column>
									<Grid.Column textAlign="center">
										<Button
											basic
											circular
											color="blue"
											onClick={() => this.navigate('/team')}>
											Meet Our Teams
										</Button>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Card.Content>
					</Card>
				</Segment>
				<Segment size="small">
					<Card centered fluid={true}>
						<h1 style={{ paddingTop: '10px', margin: '0', color: '#00aeef' }}>
							DOING BUSINESS WITH THE KDC
						</h1>
						<Card.Content>
							<Grid columns={2}>
								<Grid.Row>
									<Grid.Column verticalAlign="middle">
										<Card.Description textAlign="center">
											<p style={{ color: '#00aeef' }}>
												The office is an open concept collaborative space
												specifically setup for our team only. We embrace new
												solutions, technologies and processes. We're just as
												passionate about our team as we are about our clients.
												We're a team of individuals who want to apply creativity
												and experience to shape the future of our solutions.
											</p>
										</Card.Description>
									</Grid.Column>
									<Grid.Column>
										<Image src={logo} />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column></Grid.Column>
									<Grid.Column textAlign="center">
										<Button
											basic
											circular
											color="blue"
											onClick={() => this.navigate('/about')}>
											Read More
										</Button>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Card.Content>
					</Card>
				</Segment>
				<Segment size="small">
					<h1 style={{ paddingTop: '10px', color: '#00aeef' }}>
						CO-OP REVIEWS
					</h1>
					<Grid columns={3}>
						<Grid.Row>
							<Grid.Column textAlign="center" verticalAlign="middle" width={2}>
								<Button
									basic
									onClick={() => this.reviewCarousel.slidePrev()}
									icon="chevron left"
									color="blue"
									circular></Button>
							</Grid.Column>
							<Grid.Column textAlign="center" verticalAlign="middle" width={12}>
								<AliceCarousel
									className="carousel"
									ref={(el) => (this.reviewCarousel = el)}
									dotsDisabled={true}
									buttonsDisabled={true}
									responsive={items}>
									<Card>
										<Card.Content>
											<Card.Header>
												<p style={{ color: '#00aeef' }}>Sample Review 1</p>
											</Card.Header>
											<Card.Description>
												<p style={{ color: '#00aeef' }}>
													Sample Review Description
												</p>
											</Card.Description>
											<Card.Meta>
												<p style={{ color: '#00aeef' }}>
													Sample Review Metadata
												</p>
											</Card.Meta>
										</Card.Content>
									</Card>
									<Card>
										<Card.Content>
											<Card.Header>
												<p style={{ color: '#00aeef' }}>Sample Review 2</p>
											</Card.Header>
											<Card.Description>
												<p style={{ color: '#00aeef' }}>
													Sample Review Description
												</p>
											</Card.Description>
											<Card.Meta>
												<p style={{ color: '#00aeef' }}>
													Sample Review Metadata
												</p>
											</Card.Meta>
										</Card.Content>
									</Card>
									<Card>
										<Card.Content>
											<Card.Header>
												<p style={{ color: '#00aeef' }}>Sample Review 3</p>
											</Card.Header>
											<Card.Description>
												<p style={{ color: '#00aeef' }}>
													Sample Review Description
												</p>
											</Card.Description>
											<Card.Meta>
												<p style={{ color: '#00aeef' }}>
													Sample Review Metadata
												</p>
											</Card.Meta>
										</Card.Content>
									</Card>
									<Card>
										<Card.Content>
											<Card.Header>
												<p style={{ color: '#00aeef' }}>Sample Review 4</p>
											</Card.Header>
											<Card.Description>
												<p style={{ color: '#00aeef' }}>
													Sample Review Description
												</p>
											</Card.Description>
											<Card.Meta>
												<p style={{ color: '#00aeef' }}>
													Sample Review Metadata
												</p>
											</Card.Meta>
										</Card.Content>
									</Card>
									<Card>
										<Card.Content>
											<Card.Header>
												<p style={{ color: '#00aeef' }}>Sample Review 5</p>
											</Card.Header>
											<Card.Description>
												<p style={{ color: '#00aeef' }}>
													Sample Review Description
												</p>
											</Card.Description>
											<Card.Meta>
												<p style={{ color: '#00aeef' }}>
													Sample Review Metadata
												</p>
											</Card.Meta>
										</Card.Content>
									</Card>
									<Card>
										<Card.Content>
											<Card.Header>
												<p style={{ color: '#00aeef' }}>Sample Review 6</p>
											</Card.Header>
											<Card.Description>
												<p style={{ color: '#00aeef' }}>
													Sample Review Description
												</p>
											</Card.Description>
											<Card.Meta>
												<p style={{ color: '#00aeef' }}>
													Sample Review Metadata
												</p>
											</Card.Meta>
										</Card.Content>
									</Card>
								</AliceCarousel>
							</Grid.Column>
							<Grid.Column textAlign="center" verticalAlign="middle" width={2}>
								<Button
									basic
									onClick={() => this.reviewCarousel.slideNext()}
									icon="chevron right"
									color="blue"
									circular></Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		);
	}
}

/** Export Home Component */
export default withRouter(Home);
