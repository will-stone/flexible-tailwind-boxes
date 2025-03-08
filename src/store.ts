import { createReactStore, TwoAndEight } from '2n8'

class Store extends TwoAndEight {
  selectedBoxId: null | number = null
  boxes: Record<number, { c?: number[] }> = {
    1: {
      c: [2, 3, 4],
    },
    2: {},
    3: {},
    4: {},
  }

  handleSelectBox(id: number | null) {
    this.selectedBoxId = id
  }
}

export const useStore = createReactStore(new Store())
