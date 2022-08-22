defmodule Server.TodosFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Server.Todos` context.
  """

  @doc """
  Generate a todo.
  """
  def todo_fixture(attrs \\ %{}) do
    {:ok, todo} =
      attrs
      |> Enum.into(%{
        completed: true,
        name: "some name"
      })
      |> Server.Todos.create_todo()

    todo
  end
end
