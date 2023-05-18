defmodule ServerWeb.Schema do
  alias Server.Todos
  use Absinthe.Schema

  object :todo_item do
    field(:id, non_null(:id))
    field(:content, non_null(:string))

    field :is_completed, non_null(:boolean) do
      resolve(fn %{completed_at: completed_at}, _, _ ->
        {:ok, !is_nil(completed_at)}
      end)
    end
  end

  mutation do
    field :create_todo_item, non_null(:boolean) do
      arg(:content, non_null(:string))

      resolve(fn %{content: content}, _ ->
        case Todos.create_todo(%{content: content}) do
          {:ok, %Todos.Todo{}} -> {:ok, true}
          _ -> {:ok, false}
        end
      end)
    end

    field :toggle_todo_item, :todo_item do
      arg(:id, non_null(:id))

      resolve(fn %{id: todo_id}, _ ->
        Todos.toggle_todo_by_id(todo_id)
      end)
    end
  end

  query do
    field :hello, :string do
      resolve(fn _, _ -> {:ok, "Hello World"} end)
    end

    field :test, :string do
      resolve(fn _, _ -> {:ok, "Hello Test"} end)
    end

    field :todo_items, non_null(list_of(:todo_item)) do
      resolve(fn _, _ ->
        {:ok, Todos.list_todos()}
      end)
    end
  end
end
