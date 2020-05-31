describe('Verificar si la ruta es valida', () => {
  it('Deberia verificar si la ruta ingresada es valida', () => {
    checkRoute('./some/example.md').then((route) => {
      expect('./some/example.md').tobe('rutavalida')
      console.log('hola')
    })
  })
})

describe ()