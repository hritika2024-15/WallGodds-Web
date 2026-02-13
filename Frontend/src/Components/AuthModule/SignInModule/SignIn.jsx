import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.css';
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Sign in attempted with:', data);
    // Add your authentication logic here
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    // Add your social login logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Sign In</h1>
        <p className={styles.subtitle}>Enter valid credentials to continue</p>
      </div>
      
      <div className={styles.signInCard}>
        <div className={styles.cardContent}>
          <div className={styles.socialButtons}>
            <button
              className={styles.socialButton}
              onClick={() => handleSocialLogin('Google')}
              type="button"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.4999"
                  cy="12.5002"
                  r="10.4167"
                  stroke="#555555"
                  strokeWidth="1.5"
                />
                <path
                  d="M12.5001 12.4998H17.7084C17.7084 15.3763 15.3766 17.7082 12.5001 17.7082C9.6236 17.7082 7.29175 15.3763 7.29175 12.4998C7.29175 9.62335 9.6236 7.2915 12.5001 7.2915C13.9383 7.2915 15.2404 7.87447 16.1829 8.81699"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Google
            </button>

            <button
              className={styles.socialButton}
              onClick={() => handleSocialLogin('GitHub')}
              type="button"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.79492 17.9353C7.20578 18.5367 8.45272 19.8203 10.1536 20.1438M10.2813 23.0257C9.21 22.8492 2.08936 20.5316 2.08936 12.7055C2.08936 5.38331 8.34134 2.19238 12.5068 2.19238C16.6723 2.19238 22.9227 5.38331 22.9227 12.7055C22.9227 20.5316 15.802 22.8492 14.7307 23.0257C14.7307 23.0257 14.513 19.4659 14.64 18.8558C14.767 18.2458 14.3343 17.2641 14.3343 17.2641C15.3458 16.8856 16.8855 16.3431 17.402 14.8876C17.8027 13.7582 18.0548 12.1182 16.934 10.5767C16.934 10.5767 17.2266 8.08623 16.6723 7.98976C16.118 7.89328 14.485 8.97564 14.485 8.97564C14.0094 8.8408 12.948 8.58275 12.5079 8.62925C12.0677 8.58275 11.0027 8.8408 10.5271 8.97564C10.5271 8.97564 8.89403 7.89328 8.33973 7.98976C7.78543 8.08623 8.07807 10.5767 8.07807 10.5767C6.95723 12.1182 7.20931 13.7582 7.61008 14.8876C8.12659 16.3431 9.66627 16.8856 10.6777 17.2641C10.6777 17.2641 10.245 18.2458 10.372 18.8558C10.499 19.4659 10.2813 23.0257 10.2813 23.0257Z"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              GitHub
            </button>

            <button
              className={styles.socialButton}
              onClick={() => handleSocialLogin('Microsoft')}
              type="button"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="8"
                  height="8"
                  rx="1"
                  stroke="#555555"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="13"
                  y="3"
                  width="8"
                  height="8"
                  rx="1"
                  stroke="#555555"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="3"
                  y="13"
                  width="8"
                  height="8"
                  rx="1"
                  stroke="#555555"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="13"
                  y="13"
                  width="8"
                  height="8"
                  rx="1"
                  stroke="#555555"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              Microsoft
            </button>
          </div>

          <div className={styles.divider}>
            <span>or</span>
          </div>



          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.field}>
              {errors.email && (
                <div className={styles.error}>
                  {errors.email.message}
                </div>
              )}
              <input
                type="email"
                placeholder="Email"
                className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              <span className={styles.requiredem}>*</span>
            </div>

            <div className={styles.field}>
              {errors.password && (
                <div className={styles.error}>
                  {errors.password.message}
                </div>
              )}
              <input
                type="password"
                placeholder="Password"
                className={`${styles.input} ${errors.password ? styles.errorInput : ''}`}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              <span className={styles.requiredp}>*</span>
            </div>

            <Link to="/ForgetPassword" className={styles.forgotPassword}>
              Forget password ?
            </Link>
            
            <button type="submit" className={styles.signInButton}>
              Sign In
            </button>
          </form>
        </div>
      </div>
      
      <p className={styles.signUpText}>
        Don't have an Account ?{' '}
        <Link to="/signUp" className={styles.signUpLink}>
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;