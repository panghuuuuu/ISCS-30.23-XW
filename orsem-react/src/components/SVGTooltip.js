import React, {
  useState,
  useRef,
  cloneElement,
  Children,
  isValidElement,
} from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,
  arrow,
  FloatingArrow,
  FloatingPortal,
} from '@floating-ui/react';

const SVGTooltip = ({ pathId, imgSrc, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef();

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [offset(12), flip(), shift(), arrow({ element: arrowRef })],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { styles: transitionStyles } = useTransitionStyles(context, {
    duration: 200,
    initial: {
      opacity: 0,
      transform: 'scale(0.5) translateY(-50px)',
    },
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const childWithProps = Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child, {
          ref: setReference,
          ...getReferenceProps(),
        })
      : child,
  );

  return (
    <>
      {childWithProps}

      <FloatingPortal>
        {isOpen && (
          <div
            className='Tooltip'
            ref={setFloating}
            style={{
              ...floatingStyles,
            }}
            {...getFloatingProps()}
          >
            <div
              style={{
                ...transitionStyles,
                background: '#f79739',
                opacity: 1,
                borderRadius: '0.75rem',
                textAlign: 'center',
                padding: '1rem',
                width: '325px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.35)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.75rem',
                color: '#fffaed',
              }}
            >
              {pathId}
              <img
                src={imgSrc}
                style={{ borderRadius: '0.5rem' }}
                alt='logo'
                loading='lazy'
              />
              <FloatingArrow
                height={20}
                ref={arrowRef}
                context={context}
                fill='#F79739'
                d='M0 20C0 20 2.06906 19.9829 5.91817 15.4092C7.49986 13.5236 8.97939 12.3809 10.0002 12.3809C11.0202 12.3809 12.481 13.6451 14.0814 15.5472C17.952 20.1437 20 20 20 20H0Z'
              />
            </div>
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

export default SVGTooltip;
