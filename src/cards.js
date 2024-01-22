import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cardss() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.kitchenstuffplus.com/media/catalog/product/9/2/92072_KSP_Bakers_Glass_Digital_Kitchen_Scale__Black_2_2.jpg" />
        <Card.Body>
          <Card.Title>Digital Kitchen Scale</Card.Title>
          <Card.Text>Accurate digital scale for precise ingredient measurements</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Price: 25</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.thdstatic.com/productImages/3574e7cc-1c23-448a-9f04-302909a79d5f/svn/black-ovente-spatulas-sp12305b-64_600.jpg" />
        <Card.Body>
          <Card.Title>Silicone Spatula Set</Card.Title>
          <Card.Text>Versatile silicone spatulas for mixing and scraping</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Price: 15</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYjFiYWFiYmQ1YWYwNzkyMjg4YTk0LXN0YW5kLW1peGVyLWtpY2hvdC0xMC1wLXNwZWVkLTQtOC1xdC5qcGc.jpg" />
        <Card.Body>
          <Card.Title>Stand Mixer</Card.Title>
          <Card.Text>Powerful stand mixer for baking and mixing ingredients</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Price: 200</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cardss;