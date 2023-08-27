/* eslint-disable no-unused-vars */

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  graphql_public: {
    CompositeTypes: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
  };
  public: {
    CompositeTypes: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Tables: {
      _prisma_migrations: {
        Insert: {
          id: string;
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
        Row: {
          id: string;
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Update: {
          id?: string;
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
      };
      chef: {
        Insert: {
          id?: number;
          name: string;
          created_at?: string;
          description: string;
          image_url: string;
          updated_at?: string;
        };
        Relationships: [];
        Row: {
          id: number;
          name: string;
          created_at: string;
          description: string;
          image_url: string;
          updated_at: string;
        };
        Update: {
          id?: number;
          name?: string;
          created_at?: string;
          description?: string;
          image_url?: string;
          updated_at?: string;
        };
      };
      favorite: {
        Insert: {
          created_at?: string;
          recipe_id: number;
          updated_at?: string;
          user_id: string;
        };
        Relationships: [
          {
            columns: ["recipe_id"];
            foreignKeyName: "favorite_recipe_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "recipe";
          },
          {
            columns: ["user_id"];
            foreignKeyName: "favorite_user_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "user";
          }
        ];
        Row: {
          created_at: string;
          recipe_id: number;
          updated_at: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          recipe_id?: number;
          updated_at?: string;
          user_id?: string;
        };
      };
      follow: {
        Insert: {
          chef_id: number;
          created_at?: string;
          updated_at?: string;
          user_id: string;
        };
        Relationships: [
          {
            columns: ["chef_id"];
            foreignKeyName: "follow_chef_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "chef";
          },
          {
            columns: ["user_id"];
            foreignKeyName: "follow_user_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "user";
          }
        ];
        Row: {
          chef_id: number;
          created_at: string;
          updated_at: string;
          user_id: string;
        };
        Update: {
          chef_id?: number;
          created_at?: string;
          updated_at?: string;
          user_id?: string;
        };
      };
      ingredient: {
        Insert: {
          id?: number;
          name: string;
          created_at?: string;
          quantity?: string | null;
          recipe_id: number;
          updated_at?: string;
        };
        Relationships: [
          {
            columns: ["recipe_id"];
            foreignKeyName: "ingredient_recipe_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "recipe";
          }
        ];
        Row: {
          id: number;
          name: string;
          created_at: string;
          quantity: string | null;
          recipe_id: number;
          updated_at: string;
        };
        Update: {
          id?: number;
          name?: string;
          created_at?: string;
          quantity?: string | null;
          recipe_id?: number;
          updated_at?: string;
        };
      };
      instruction: {
        Insert: {
          id?: number;
          created_at?: string;
          description?: string | null;
          note?: string | null;
          recipe_id: number;
          step: number;
          updated_at?: string;
        };
        Relationships: [
          {
            columns: ["recipe_id"];
            foreignKeyName: "instruction_recipe_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "recipe";
          }
        ];
        Row: {
          id: number;
          created_at: string;
          description: string | null;
          note: string | null;
          recipe_id: number;
          step: number;
          updated_at: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          description?: string | null;
          note?: string | null;
          recipe_id?: number;
          step?: number;
          updated_at?: string;
        };
      };
      link: {
        Insert: {
          id?: number;
          chef_id: number;
          created_at?: string;
          follower?: string | null;
          site: string;
          site_id?: string | null;
          updated_at?: string;
          url: string;
        };
        Relationships: [
          {
            columns: ["chef_id"];
            foreignKeyName: "link_chef_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "chef";
          }
        ];
        Row: {
          id: number;
          chef_id: number;
          created_at: string;
          follower: string | null;
          site: string;
          site_id: string | null;
          updated_at: string;
          url: string;
        };
        Update: {
          id?: number;
          chef_id?: number;
          created_at?: string;
          follower?: string | null;
          site?: string;
          site_id?: string | null;
          updated_at?: string;
          url?: string;
        };
      };
      recipe: {
        Insert: {
          id?: number;
          title: string;
          chef_id?: number | null;
          created_at?: string;
          description?: string | null;
          image_url1: string;
          image_url2?: string | null;
          link?: string | null;
          servings: string;
          status: string;
          updated_at?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            columns: ["chef_id"];
            foreignKeyName: "recipe_chef_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "chef";
          },
          {
            columns: ["user_id"];
            foreignKeyName: "recipe_user_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "user";
          }
        ];
        Row: {
          id: number;
          title: string;
          chef_id: number | null;
          created_at: string;
          description: string | null;
          image_url1: string;
          image_url2: string | null;
          link: string | null;
          servings: string;
          status: string;
          updated_at: string;
          user_id: string | null;
        };
        Update: {
          id?: number;
          title?: string;
          chef_id?: number | null;
          created_at?: string;
          description?: string | null;
          image_url1?: string;
          image_url2?: string | null;
          link?: string | null;
          servings?: string;
          status?: string;
          updated_at?: string;
          user_id?: string | null;
        };
      };
      shoppingItem: {
        Insert: {
          id?: number;
          created_at?: string;
          ingredient_id?: number | null;
          isChecked: boolean;
          shoppingList_id: number;
          updated_at?: string;
        };
        Relationships: [
          {
            columns: ["ingredient_id"];
            foreignKeyName: "shoppingItem_ingredient_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "ingredient";
          },
          {
            columns: ["shoppingList_id"];
            foreignKeyName: "shoppingItem_shoppingList_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "shoppingList";
          }
        ];
        Row: {
          id: number;
          created_at: string;
          ingredient_id: number | null;
          isChecked: boolean;
          shoppingList_id: number;
          updated_at: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          ingredient_id?: number | null;
          isChecked?: boolean;
          shoppingList_id?: number;
          updated_at?: string;
        };
      };
      shoppingList: {
        Insert: {
          id?: number;
          created_at?: string;
          recipe_id?: number | null;
          step: number;
          updated_at?: string;
          user_id: string;
        };
        Relationships: [
          {
            columns: ["recipe_id"];
            foreignKeyName: "shoppingList_recipe_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "recipe";
          },
          {
            columns: ["user_id"];
            foreignKeyName: "shoppingList_user_id_fkey";
            referencedColumns: ["id"];
            referencedRelation: "user";
          }
        ];
        Row: {
          id: number;
          created_at: string;
          recipe_id: number | null;
          step: number;
          updated_at: string;
          user_id: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          recipe_id?: number | null;
          step?: number;
          updated_at?: string;
          user_id?: string;
        };
      };
      user: {
        Insert: {
          id: string;
          name: string;
          createdAt?: string;
          updatedAt: string;
        };
        Relationships: [];
        Row: {
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        Update: {
          id?: string;
          name?: string;
          createdAt?: string;
          updatedAt?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
  };
  storage: {
    CompositeTypes: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          name: string;
          bucketid: string;
          metadata: Json;
          owner: string;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          bucket_id: string;
          size: number;
        }[];
      };
      search: {
        Args: {
          bucketname: string;
          levels?: number;
          limits?: number;
          offsets?: number;
          prefix: string;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          id: string;
          name: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
    };
    Tables: {
      buckets: {
        Insert: {
          id: string;
          name: string;
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            columns: ["owner"];
            foreignKeyName: "buckets_owner_fkey";
            referencedColumns: ["id"];
            referencedRelation: "users";
          }
        ];
        Row: {
          id: string;
          name: string;
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          owner: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
      };
      migrations: {
        Insert: {
          id: number;
          name: string;
          executed_at?: string | null;
          hash: string;
        };
        Relationships: [];
        Row: {
          id: number;
          name: string;
          executed_at: string | null;
          hash: string;
        };
        Update: {
          id?: number;
          name?: string;
          executed_at?: string | null;
          hash?: string;
        };
      };
      objects: {
        Insert: {
          id?: string;
          name?: string | null;
          bucket_id?: string | null;
          created_at?: string | null;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            columns: ["bucket_id"];
            foreignKeyName: "objects_bucketId_fkey";
            referencedColumns: ["id"];
            referencedRelation: "buckets";
          },
          {
            columns: ["owner"];
            foreignKeyName: "objects_owner_fkey";
            referencedColumns: ["id"];
            referencedRelation: "users";
          }
        ];
        Row: {
          id: string;
          name: string | null;
          bucket_id: string | null;
          created_at: string | null;
          last_accessed_at: string | null;
          metadata: Json | null;
          owner: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
          bucket_id?: string | null;
          created_at?: string | null;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
  };
}
