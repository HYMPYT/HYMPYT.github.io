import css from './Container.module.css';

export function Container({ children }: any) {
    return <div className={css.container}>{children}</div>;
}
