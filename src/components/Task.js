// src/components/Task.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 Use an avatar for attributing actions or content to specific users. The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
                <input
                    type="text"
                    value={title}
                    readOnly={true}
                    placeholder="Input title"
                    style={{ textOverflow: 'ellipsis' }}
                />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    /**
     Use the loading state to indicate that the data Avatar needs is still loading.
     */
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};
