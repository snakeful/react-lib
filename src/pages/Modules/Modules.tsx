import { Button } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container } from 'semantic-ui-react'

export const Modules: React.FC<any> = (_props: any) => {
  const to = useNavigate()
  const handleTo = (url: string) => (() => to(url))
  const modules: any[] = [{
    id: 1, name: 'Security', url: '/security', icon: 'fa-user-spy'
  }, {
    id: 2, name: 'Accounting', url: '/accounting', icon: 'fa-calc'
  }, {
    id: 3, name: 'Inventory', url: '/inventory', icon: ''
  }, {
    id: 4, name: 'Account Receivable', url: '/account-receivables', icon: ''
  }, {
    id: 5, name: 'Account Payable', url: '/account-payable', icon: ''
  }, {
    id: 6, name: 'Banks', url: '/banks', icon: ''
  }, {
    id: 7, name: 'Taxes', url: '/taxes', icon: ''
  }, {
    id: 8, name: 'Sales (POS)', url: '/sales', icon: ''
  }]
  return (
    <Container className='ngm-modules'>
      {modules.map(({ id, name, url }) =>
        <div className='ngm-module' key={id}>
          <Card>
            <Card.Content>
              <Card.Header className='text-center'>{name}</Card.Header>
              <Card.Meta>What module {name} does
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button size='mini' onClick={handleTo(url)}>GO</Button>
            </Card.Content>
          </Card>
        </div>)}
    </Container>
  )
}
