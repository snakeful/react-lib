import { Button } from 'components'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Modules: React.FC<any> = (_props: any) => {
  const modules: any[] = [{
    id: 1, name: 'Security', url: '/security', icon: 'fa-user-spy'
  }, {
    id: 2, name: 'Accounting', url: '/accounting', icon: 'fa-calc'
  }, {
    id: 3, name: 'Inventory', url: '/inventory', icon: ''
  }, {
    id: 4, name: 'Account Receivable', url: '/accReceivables', icon: ''
  }, {
    id: 5, name: 'Account Payable', url: '/accPayable', icon: ''
  }, {
    id: 6, name: 'Banks', url: '/banks', icon: ''
  }, {
    id: 7, name: 'Taxes', url: '/taxes', icon: ''
  }, {
    id: 8, name: 'Sales (POS)', url: 'sales', icon: ''
  }]
  return (
    <div className='ngm-modules'>
      {modules.map(({ id, name, url }) =>
        <div className='ngm-module' key={id}>
          <Card>
            <Card.Header className='text-center'>{name}</Card.Header>
            <Card.Body>What module {name} does
            </Card.Body>
            <Card.Footer className='text-end'>
              <Link to={`${url}`}>
                <Button variant='dark' size='mini'>GO</Button>
              </Link>
            </Card.Footer>
          </Card>
        </div>)}
    </div>
  )
}
