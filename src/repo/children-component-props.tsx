// 将 TSX/JSX 作为子组件传递

function Card ({children}){
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default function Profile () {
  return (
    <Card>
    </Card>
  )
}