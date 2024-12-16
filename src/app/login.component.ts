import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-gray-100 flex items-center justify-center h-screen">
      <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <!-- Title -->
        <h1 class="text-2xl font-bold text-center mb-6">Log in</h1>

        <!-- Login Form -->
        <form action="#" method="POST">
          <!-- Email Input -->
          <div class="relative mb-6">
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              class="floating-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <label for="email" class="floating-label">Email</label>
          </div>

          <!-- Password Input -->
          <div class="relative mb-6">
            <input
              type="password"
              id="password"
              placeholder=" "
              required
              class="floating-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <label for="password" class="floating-label">Password</label>
          </div>

          <a
            href="#"
            class="text-sm text-blue-500 hover:underline mb-4 inline-block"
            >Forgot your password?</a
          >

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Log In
          </button>
        </form>

        <!-- Sign Up Link -->
        <p class="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?
          <a href="#" class="text-blue-500 hover:underline">Sign Up</a>
        </p>

        <!-- Social Login Icons -->
        <div class="flex items-center justify-center mt-4">
          <span class="text-gray-400 text-sm mr-2">Or sign in with:</span>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-500 hover:text-blue-500"
              ><i class="fab fa-google"></i> G</a
            >
            <a href="#" class="text-gray-500 hover:text-blue-500"
              ><i class="fab fa-linkedin"></i> in</a
            >
            <a href="#" class="text-gray-500 hover:text-blue-500"
              ><i class="fab fa-facebook"></i> f</a
            >
            <a href="#" class="text-gray-500 hover:text-blue-500"
              ><i class="fab fa-twitter"></i> t</a
            >
            <a href="#" class="text-gray-500 hover:text-blue-500"
              ><i class="fab fa-apple"></i> </a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .floating-input:focus ~ label,
    .floating-input:not(:placeholder-shown) ~ label {
      transform: translateY(-1.5rem) scale(0.9);
      color: #3b82f6;
    }
    .floating-label {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      color: #9ca3af;
      transition: all 0.2s ease-out;
      pointer-events: none;
    }
  `,
})
export class LoginComponent {}
