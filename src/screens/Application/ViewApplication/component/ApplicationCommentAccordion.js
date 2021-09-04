import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AccordionItem from '../../../../common/Accordion/AccordionItem';
import Button from '../../../../common/Button/Button';
import { errorNotification } from '../../../../common/Toast';
import { changeApplicationStatus } from '../../redux/ApplicationAction';

const ApplicationCommentAccordion = props => {
  const { applicationDetail } = useSelector(({ application }) => application?.viewApplication ?? {});

  const dispatch = useDispatch();
  const { index } = props;

  const [commentText, setCommentText] = useState('');

  const { comments, _id, status } = useMemo(() => applicationDetail ?? {}, [applicationDetail]);

  const saveClientComment = useCallback(async () => {
    if (!commentText || commentText?.toString()?.trim()?.length <= 0) {
      errorNotification('Please Enter Comment');
    } else {
      const data = {
        update: 'field',
        comments: commentText,
      };
      await dispatch(changeApplicationStatus(_id, data));
    }
  }, [_id, commentText]);

  useEffect(() => {
    setCommentText(comments);
  }, [comments]);

  return (
    <>
      <AccordionItem index={index} header="Comment" suffix="expand_more">
        <div className="common-accordion-item-content-box">
          {status?.value === 'DECLINED' || status?.value === 'APPROVED' ? (
            <textarea
              className="mt-5 w-100"
              style={{ border: 'none' }}
              disabled
              value={comments ? `${comments}` : '-'}
            />
          ) : (
            <>
              <textarea
                rows={3}
                name="comment"
                className="mt-5 w-100"
                placeholder="Enter Comment"
                value={commentText}
                onChange={e => setCommentText(e?.target?.value)}
              />
              <div className="d-flex just-end align-center mt-5">
                <Button buttonType="primary" className="small-button" title="save" onClick={saveClientComment} />
              </div>
            </>
          )}
        </div>
      </AccordionItem>
    </>
  );
};

export default React.memo(ApplicationCommentAccordion);

ApplicationCommentAccordion.propTypes = {
  index: PropTypes.number.isRequired,
};
