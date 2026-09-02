const styles = {
  '-mb-px': {
    marginBottom: '-1px'
  },
  '-mt-px': {
    marginTop: '-1px'
  },
  'absolute w-full bg-teal-400 h-px left-0 invisible': {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#4fd1c5',
    height: '1px',
    left: '0',
    visibility: 'hidden'
  },
  'bg-gray-100 border-b border-gray-200 -mb-px': {
    backgroundColor: '#f7fafc',
    borderBottomWidth: '1px',
    borderColor: '#edf2f7',
    marginBottom: '-1px'
  },
  'bg-gray-100 border-b border-indigo-100': {
    backgroundColor: '#f7fafc',
    borderBottomWidth: '1px',
    borderColor: '#ebf4ff'
  },
  'bg-gray-100 border-t border-indigo-100 mt-auto': {
    backgroundColor: '#f7fafc',
    borderTopWidth: '1px',
    borderColor: '#ebf4ff',
    marginTop: 'auto'
  },
  'bg-indigo-500 h-full w-px absolute left-0': {
    backgroundColor: '#667eea',
    height: '100%',
    width: '1px',
    position: 'absolute',
    left: '0'
  },
  'bg-indigo-500 inline-block w-6 h-px': {
    backgroundColor: '#667eea',
    display: 'inline-block',
    width: '1.5rem',
    height: '1px'
  },
  'bg-teal-300': {
    backgroundColor: '#81e6d9'
  },
  'bg-teal-400 h-6 w-px absolute ml-1': {
    backgroundColor: '#4fd1c5',
    height: '1.5rem',
    width: '1px',
    position: 'absolute',
    marginLeft: '0.25rem'
  },
  'bg-teal-400 inline-block w-8 h-px': {
    backgroundColor: '#4fd1c5',
    display: 'inline-block',
    width: '2rem',
    height: '1px'
  },
  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal mb-3':
    {
      backgroundColor: '#fff',
      ':focus': {
        outline: 0,
        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)'
      },
      borderWidth: '1px',
      borderColor: '#e2e8f0',
      borderRadius: '0.375rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      display: 'block',
      width: '100%',
      appearance: 'none',
      lineHeight: '1.5',
      marginBottom: '0.75rem'
    },
  'border-4 border-white rounded-full': {
    borderWidth: '4px',
    borderColor: '#fff',
    borderRadius: '9999px'
  },
  'border-t border-gray-200 py-4': {
    borderTopWidth: '1px',
    borderColor: '#edf2f7',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  'border-teal-400': {
    borderColor: '#4fd1c5'
  },
  flex: {
    display: 'flex'
  },
  'flex flex-col items-center justify-center mx-auto mt-4': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem'
  },
  'flex flex-col items-center text-center mt-4': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '1rem'
  },
  'flex flex-col items-end justify-center cursor-pointer w-6 h-5 sm:hidden': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '1.5rem',
    height: '1.25rem',
    '@media (min-width: 640px)': {
      display: 'none'
    }
  },
  'flex flex-col min-h-screen': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  'flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300': {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft: '0.75rem',
    marginRight: '0.75rem',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    borderWidth: '1px',
    borderColor: '#e2e8f0'
  },
  'flex flex-col sm:flex-row w-full p-4 relative border-l border-indigo-200': {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 640px)': {
      flexDirection: 'row'
    },
    width: '100%',
    padding: '1rem',
    position: 'relative',
    borderLeftWidth: '1px',
    borderColor: '#c3dafe'
  },
  'flex flex-col w-full': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  'flex flex-wrap -mx-3': {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-0.75rem',
    marginRight: '-0.75rem'
  },
  'flex flex-wrap max-w-screen-md w-full mx-auto p-5': {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '768px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1.25rem'
  },
  'flex flex-wrap w-full': {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },
  'flex items-center justify-center w-10 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    color: '#667eea',
    borderWidth: '1px',
    borderColor: '#4fd1c5',
    borderRadius: '9999px',
    marginBottom: '0.5rem'
  },
  'flex items-center justify-center w-full': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  'flex items-center mr-auto text-indigo-900 hover:text-indigo-900': {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
    color: '#3c366b',
    ':hover': {
      color: '#3c366b'
    }
  },
  'font-semibold': {
    fontWeight: '600'
  },
  'font-semibold mb-4': {
    fontWeight: '600',
    marginBottom: '1rem'
  },
  'font-semibold mt-3': {
    fontWeight: '600',
    marginTop: '0.75rem'
  },
  'font-semibold my-4': {
    fontWeight: '600',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  'h-2 bg-teal-400': {
    height: '0.5rem',
    backgroundColor: '#4fd1c5'
  },
  'items-center': {
    alignItems: 'center'
  },
  'm-0 text-indigo-900 bg-white': {
    margin: '0',
    color: '#3c366b',
    backgroundColor: '#fff'
  },
  'max-w-screen-sm mx-auto w-full px-0 sm:px-16 mb-4': {
    maxWidth: '640px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    '@media (min-width: 640px)': {
      paddingLeft: '4rem',
      paddingRight: '4rem'
    },
    marginBottom: '1rem'
  },
  'mb-1': {
    marginBottom: '0.25rem'
  },
  'mb-8': {
    marginBottom: '2rem'
  },
  'mt-1': {
    marginTop: '0.25rem'
  },
  'mt-3': {
    marginTop: '0.75rem'
  },
  'mx-auto': {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  'opacity-0': {
    opacity: '0'
  },
  'opacity-1': {
    opacity: '1'
  },
  'p-3': {
    padding: '0.75rem'
  },
  'p-4 pt-2 mt-auto': {
    padding: '1rem',
    paddingTop: '0.5rem',
    marginTop: 'auto'
  },
  'p-4 text-indigo-900': {
    padding: '1rem',
    color: '#3c366b'
  },
  'pb-0': {
    paddingBottom: '0'
  },
  'py-2 px-8 rounded-full border border-teal-300 text-indigo-900': {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    borderRadius: '9999px',
    borderWidth: '1px',
    borderColor: '#81e6d9',
    color: '#3c366b'
  },
  'py-8 sm:py-16': {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    '@media (min-width: 640px)': {
      paddingTop: '4rem',
      paddingBottom: '4rem'
    }
  },
  'relative text-indigo-900 border-b border-transparent hover:text-indigo-900 ml-0 sm:ml-8 mt-3 sm:mt-0': {
    position: 'relative',
    color: '#3c366b',
    borderBottomWidth: '1px',
    borderColor: 'transparent',
    ':hover': {
      color: '#3c366b'
    },
    marginLeft: '0',
    '@media (min-width: 640px)': {
      marginLeft: '2rem',
      marginTop: '0'
    },
    marginTop: '0.75rem'
  },
  'relative w-2 h-8 mb-6 -mt-2': {
    position: 'relative',
    width: '0.5rem',
    height: '2rem',
    marginBottom: '1.5rem',
    marginTop: '-0.5rem'
  },
  'sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden': {
    '@media (min-width: 640px)': {
      display: 'flex',
      flexDirection: 'row',
      width: 'auto',
      order: '0',
      marginTop: '0',
      marginBottom: '0'
    },
    flexDirection: 'column',
    width: '100%',
    order: '9999',
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'none'
  },
  'text-center': {
    textAlign: 'center'
  },
  'text-indigo-600': {
    color: '#5a67d8'
  },
  'text-indigo-600 hover:text-indigo-700': {
    color: '#5a67d8',
    ':hover': {
      color: '#4c51bf'
    }
  },
  'text-indigo-900 hover:text-indigo-600 mx-2': {
    color: '#3c366b',
    ':hover': {
      color: '#5a67d8'
    },
    marginLeft: '0.5rem',
    marginRight: '0.5rem'
  },
  'text-lg': {
    fontSize: '1.125rem'
  },
  'text-md mt-1 font-semibold': {
    marginTop: '0.25rem',
    fontWeight: '600'
  },
  'text-xs': {
    fontSize: '0.75rem'
  },
  'text-xs border border-teal-400 rounded-full px-2': {
    fontSize: '0.75rem',
    borderWidth: '1px',
    borderColor: '#4fd1c5',
    borderRadius: '9999px',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem'
  },
  'text-xs text-indigo-500': {
    fontSize: '0.75rem',
    color: '#667eea'
  },
  'text-xs text-indigo-600 w-full text-left': {
    fontSize: '0.75rem',
    color: '#5a67d8',
    width: '100%',
    textAlign: 'left'
  },
  'text-xs text-indigo-900 border border-teal-400 rounded-full px-2 py-1 mr-2': {
    fontSize: '0.75rem',
    color: '#3c366b',
    borderWidth: '1px',
    borderColor: '#4fd1c5',
    borderRadius: '9999px',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    marginRight: '0.5rem'
  },
  'uppercase mb-4 text-lg font-bold w-full text-left': {
    textTransform: 'uppercase',
    marginBottom: '1rem',
    fontSize: '1.125rem',
    fontWeight: '700',
    width: '100%',
    textAlign: 'left'
  },
  visible: {
    visibility: 'visible'
  },
  'w-16 h-16 mr-3 border border-teal-400 rounded-full': {
    width: '4rem',
    height: '4rem',
    marginRight: '0.75rem',
    borderWidth: '1px',
    borderColor: '#4fd1c5',
    borderRadius: '9999px'
  },
  'w-16 h-16 mx-auto border border-teal-400 rounded-full': {
    width: '4rem',
    height: '4rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: '1px',
    borderColor: '#4fd1c5',
    borderRadius: '9999px'
  },
  'w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute': {
    width: '0.75rem',
    height: '0.75rem',
    borderWidth: '1px',
    borderColor: '#c3dafe',
    backgroundColor: '#ebf4ff',
    borderRadius: '9999px',
    position: 'absolute'
  },
  'w-full': {
    width: '100%'
  },
  'w-full flex flex-wrap': {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  'w-full flex justify-between': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  'w-full flex justify-between mt-10': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2.5rem'
  },
  'w-full h-2 bg-gray-300 rounded overflow-hidden mt-1': {
    width: '100%',
    height: '0.5rem',
    backgroundColor: '#e2e8f0',
    borderRadius: '0.25rem',
    overflow: 'hidden',
    marginTop: '0.25rem'
  },
  'w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300': {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderWidth: '1px',
    borderColor: '#e2e8f0'
  },
  'w-full rounded-lg overflow-hidden mt-4 mb-10': {
    width: '100%',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    marginTop: '1rem',
    marginBottom: '2.5rem'
  },
  'w-full sm:w-1/2': {
    width: '100%',
    '@media (min-width: 640px)': {
      width: '50%'
    }
  },
  'w-full sm:w-1/2 p-3': {
    width: '100%',
    '@media (min-width: 640px)': {
      width: '50%'
    },
    padding: '0.75rem'
  },
  'w-full sm:w-1/3': {
    width: '100%',
    '@media (min-width: 640px)': {
      width: '33.333333%'
    }
  },
  'w-full sm:w-2/3 mt-4 sm:mt-0': {
    width: '100%',
    '@media (min-width: 640px)': {
      width: '66.666667%',
      marginTop: '0'
    },
    marginTop: '1rem'
  }
} as const;

// The returned object is consumed by styled-components as a CSS interpolation.
// Keeping this compatibility boundary untyped avoids coupling it to a specific
// styled-components major version.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function tw(strings: TemplateStringsArray): any {
  const key = strings.join('').trim().replace(/\s+/g, ' ');
  const style = (styles as Record<string, Record<string, unknown>>)[key];
  if (!style) throw new Error('Unknown legacy utility group: ' + key);
  return style;
}
