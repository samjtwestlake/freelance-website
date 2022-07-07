import { Calendar, Col, Row } from "antd";

const Book = () => {
  return (
    <>
      <div>freelance</div>
      <Row>
        <Col span={22} offset={1}>
          <Calendar />
        </Col>
      </Row>
    </>
  )
}

export default Book;