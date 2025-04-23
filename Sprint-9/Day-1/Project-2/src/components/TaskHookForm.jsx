import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../app.css';

export default function TaskHookForm(props) {
  const { kisiler, submitFn } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      people: [],
    },
    mode: 'onChange',
  });

  const watcher = watch('people');

  const onSubmit = (data) => {
    const newTask = {
      ...data,
      id: Date.now().toString(),
      status: 'yapılacak',
    };
    submitFn(newTask);
  };

  useEffect(() => {
    trigger('people');
  }, [watcher, trigger]);

  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          type="text"
          {...register('title', {
            required: 'Task başlığı yazmalısınız',
            minLength: {
              value: 3,
              message: 'Task başlığı en az 3 karakter olmalı',
            },
          })}
        />
        {errors.title && <p className="input-error">{errors.title.message}</p>}
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          {...register('description', {
            required: 'Task açıklaması yazmalısınız',
            minLength: {
              value: 10,
              message: 'Task açıklaması en az 10 karakter olmalı',
            },
          })}
        ></textarea>
        {errors.description && (
          <p className="input-error">{errors.description.message}</p>
        )}
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                value={p}
                {...register('people', {
                  validate: (value) => {
                    if (value.length === 0)
                      return 'Lütfen en az bir kişi seçin';
                    if (value.length > 3)
                      return 'En fazla 3 kişi seçebilirsiniz';
                    return true;
                  },
                })}
              />
              {p}
            </label>
          ))}
        </div>
        {errors.people && (
          <p className="input-error">{errors.people.message}</p>
        )}
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid || watcher.length === 0 || watcher.length > 3}
        >
          Kaydet
        </button>
      </div>
    </form>
  );
}
