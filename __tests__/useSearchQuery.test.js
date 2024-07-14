// import { renderHook, act } from '@testing-library/react-hooks';
// import useSearchQuery from '../useSearchQuery'; // путь к вашему хуку

// const key = 'searchQuery';
// const initialValue = '[]';

// describe('useSearchQuery', () => {
//   beforeEach(() => {
//     localStorage.clear();
//   });

//   it('should initialize searchQuery with value from localStorage', () => {
//     localStorage.setItem(key, JSON.stringify([{ id: 1, name: 'test' }]));

//     const { result } = renderHook(() => useSearchQuery({ key, value: initialValue }));

//     expect(result.current.searchQuery).toEqual([{ id: 1, name: 'test' }]);
//   });

//   it('should initialize searchQuery with initial value when localStorage is empty', () => {
//     const { result } = renderHook(() => useSearchQuery({ key, value: initialValue }));

//     expect(result.current.searchQuery).toEqual([]);
//   });

//   it('should update localStorage when searchQuery changes', () => {
//     const { result } = renderHook(() => useSearchQuery({ key, value: initialValue }));

//     act(() => {
//       result.current.setSearchQuery([{ id: 2, name: 'test2' }]);
//     });

//     expect(JSON.parse(localStorage.getItem(key))).toEqual([{ id: 2, name: 'test2' }]);
//   });
// });
