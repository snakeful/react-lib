import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NgmHeader } from '../NgmHeader/NgmHeader';
import { NgmSidebar } from '../NgmSidebar/NgmSidebar';

export interface LayoutProps extends React.HTMLProps<any> {
  brand: string;
};

export const NgmLayout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { brand } = props;
  return (
    <>
      <Row>
        <NgmHeader brand={brand}></NgmHeader>
      </Row>
      <Row>
        <Col md={2}>
          <NgmSidebar>This is the sidebar</NgmSidebar>
        </Col>
        <Col md={10}>Content or router</Col>
      </Row>
    </>
  )
}