import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Experience.css'
import { Container } from 'react-bootstrap';
import togi from '../../Assets/togi.PNG';

function Project() {
  return (
    <Container>
      <Row id="project" className='justify-content-md-center'>
        <Col lg='12'>
          <h1 className='title-experience1'>Project</h1>
          <Row className='justify-content-md-center' style={{ marginTop: 50 }}>
            <Col lg={{ span: 3, offset: 0 }} >
              <Card className='card-experience' style={{ height: 350 }}>
                <Card.Img variant="top" style={{ height: 130 }} src="https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png" />
                <Card.Body>
                  <Card.Title style={{ marginBottom: 10 }}>Human Management System</Card.Title>
                  <Card.Text style={{ marginBottom: 10, font: 'initial' }}> Bank Artha Graha Internasional</Card.Text>
                  <Card.Text style={{ marginBottom: 10 }}>This project is developed using Backend Java</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 3, offset: 0 }}>
              <Card className='card-experience' style={{ height: 350 }}>
                <Card.Img variant="top" style={{ height: 130 }} src="https://keyholesoftware.com/wp-content/uploads/Spring-Boot-React-862x431.png.webp" />
                <Card.Body>
                  <Card.Title style={{ marginBottom: 10 }}>National Spatial Data Infrastructure</Card.Title>
                  <Card.Text style={{ marginBottom: 10, font: 'initial' }}>Badan Informasi Geospatial</Card.Text>
                  <Card.Text style={{ marginBottom: 1 }}>This project is developed using Backend Java & FE React.js</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 3, offset: 0 }}>
              <Card className='card-experience' style={{ height: 350 }}>
                <Card.Img variant="top" style={{ height: 130 }} src="https://i0.wp.com/customspedia.com/wp-content/uploads/2023/08/Peningkatan-Pelayanan-Terintegrasi-Melalui-CEISA-4.0-oleh-Bea-Cukai.png?ssl=1" />
                <Card.Body>
                  <Card.Title style={{ marginBottom: 30 }}>CEISA Project</Card.Title>
                  <Card.Text style={{ marginBottom: 10, font: 'initial' }}>Direktorat Jenderal Bea & Cukai</Card.Text>
                  <Card.Text style={{ marginBottom: 1 }}>Handle CEISA existing project bugs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 3, offset: 0 }}>
              <Card className='card-experience' style={{ height: 350 }}>
                <Card.Img variant="top" style={{ height: 130 }} src={togi} />
                <Card.Body>
                  <Card.Title style={{ marginBottom: 30 }}>TOGI Landing Web</Card.Title>
                  <Card.Text style={{ marginBottom: 10, font: 'initial' }}>TOG Indonesia</Card.Text>
                  <Card.Text style={{ marginBottom: 1 }}>Handle project existing for web recruitment TOG.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 3, offset: 0 }}>
              <Card className='card-experience' style={{ height: 350 }}>
                <Card.Img variant="top" style={{ height: 130 }} src="https://statik.tempo.co/data/2020/10/28/id_976864/976864_720.jpg" />
                <Card.Body>
                  <Card.Title style={{ marginBottom: 30 }}>Anya Chatbot Apps - AIA</Card.Title>
                  <Card.Text style={{ marginBottom: 10, font: 'initial' }}>AIA Financial</Card.Text>
                  <Card.Text style={{ marginBottom: 1 }}>As a L2 support apps for backend and issue</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 3, offset: 0 }}>
              <Card className='card-experience' style={{ height: 350 }}>
                <Card.Img variant="top" style={{ height: 130 }} src="https://statik.tempo.co/data/2020/10/28/id_976864/976864_720.jpg" />
                <Card.Body>
                  <Card.Title style={{ marginBottom: 30 }}>IPOS BCA Credit Life- AIA</Card.Title>
                  <Card.Text style={{ marginBottom: 10, font: 'initial' }}>AIA Financial</Card.Text>
                  <Card.Text style={{ marginBottom: 1 }}>As a L2 support apps for data validationa and testing</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 3, offset: 0 }}>
              <Card className='card-experience' style={{ height: 350 }}>
                <Card.Img variant="top" style={{ height: 130 }} src="https://statik.tempo.co/data/2020/10/28/id_976864/976864_720.jpg" />
                <Card.Body>
                  <Card.Title style={{ marginBottom: 30 }}> Vymo - AIA</Card.Title>
                  <Card.Text style={{ marginBottom: 10, font: 'initial' }}>AIA Financial</Card.Text>
                  <Card.Text style={{ marginBottom: 1 }}>As a L2 support apps for data validation</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;