
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Space } from '../src'

const renderer = TestUtils.createRenderer()

describe('Space', () => {
  const { scale } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Space />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Space')
  })

  it('should have default width', () => {
    expect(tree.props.style.width).toEqual(scale[1])
  })

  it('should not set flex', () => {
    expect(tree.props.style.flex).toNotExist()
  })

  context('when auto true', () => {
    beforeEach(() => {
      renderer.render(<Space auto />)
      tree = renderer.getRenderOutput()
    })
    it('should set flex: 1 1 auto', () => {
      expect(tree.props.style.flex).toEqual('1 1 auto')
    })
  })

  context('when x is 1', () => {
    beforeEach(() => {
      renderer.render(<Space x={1} />)
      tree = renderer.getRenderOutput()
    })
    it('should set width', () => {
      expect(tree.props.style.width).toEqual(scale[1])
    })
  })

  context('when x is 2', () => {
    beforeEach(() => {
      renderer.render(<Space x={2} />)
      tree = renderer.getRenderOutput()
    })
    it('should set width', () => {
      expect(tree.props.style.width).toEqual(scale[2])
    })
  })

  context('when x is 3', () => {
    beforeEach(() => {
      renderer.render(<Space x={3} />)
      tree = renderer.getRenderOutput()
    })
    it('should set width', () => {
      expect(tree.props.style.width).toEqual(scale[3])
    })
  })

  context('when x is 4', () => {
    beforeEach(() => {
      renderer.render(<Space x={4} />)
      tree = renderer.getRenderOutput()
    })
    it('should set width', () => {
      expect(tree.props.style.width).toEqual(scale[4])
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Space style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})
