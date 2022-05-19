import styles from '../styles/Navbar.module.css' 
import Link from 'next/link'
import { Container, Row, Col } from "reactstrap";

export default function Navbar() {
  return (
    <Container className ={styles.container}>
      <Row>
          <Col className="m-0" sm="10" lg="10">
            <Link href="/"><a className={styles.links}>Receipt Tracker</a></Link>
          </Col>
          <Col className="m-0" sm="2" lg="2">
            <Link href="/login"><a className={styles.links}>Login</a></Link>
        <Link href="/receiptview"><a className={styles.links}>Receipt view</a></Link>
        </Col>
          
        </Row>
    </Container>
  )
}
