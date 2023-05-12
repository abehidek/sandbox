defmodule ServerWeb.Schema do
  use Absinthe.Schema

  query do
    field :hello, :string do
      resolve(fn _, _ -> {:ok, "Hello World"}end)
    end
  end
end
