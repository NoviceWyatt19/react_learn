import { create } from 'zustand'

const useGameStore = create((set) => ({
    history: [ Array(9).fill(null) ],
    currentMove: 0,

    setHistory: nextHistory => set((state) => ({
        history: typeof nextHistory === 'function'
            ? nextHistory(state.history)
            : nextHistory
    })),

  setCurrentMove: setCurrentMove => set((state) => ({
    currentMove: typeof setCurrentMove === 'function'
        ? setCurrentMove(state.currentMove)
        : setCurrentMove
  })),

}))

export default useGameStore