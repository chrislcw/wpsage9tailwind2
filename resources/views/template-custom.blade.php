{{--
  Template Name: Custom Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-1/3 px-4">
          <div class="bg-gray-500 text-white p-4">COL</div>
        </div>
        <div class="w-1/3 px-4">
          <div class="bg-gray-500 text-white p-4">COL</div>
        </div>
        <div class="w-1/3 px-4">
          <div class="bg-gray-500 text-white p-4">COL</div>
        </div>
      </div>
    </div>
  @endwhile
@endsection
